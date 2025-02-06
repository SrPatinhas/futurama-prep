import { defineStore } from 'pinia';
import { CharacterDetail, CharacterList, RequestError, SeasonDetail, SeasonsList } from '../types'

type seasonStoreProps = {
    seasons: SeasonDetail[];
    seasonDetail: SeasonDetail | null;
    characters: CharacterDetail[];
    loading: boolean;
    error: string | null;
}

export const useSeasonStore = defineStore('season', {
    state: ():seasonStoreProps => ({
        seasons: [],
        seasonDetail: null,
        characters: [],
        loading: false,
        error: null
    }),
    getters: {
        seasonsCount: (state) => state.seasons.length,
        episodesCount: (state) => state.seasons.reduce((acc, season) => acc + (season?.episodes?.length ?? 0), 0),
        seasonDetail: (state) => state.seasonDetail,
    },
    actions: {
        async fetchAllSeasons({page = 1, size = 50}) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://futuramaapi.com/api/seasons?page' + page + '&size=' + size);
                const resp:SeasonsList | RequestError = await response.json();
                if(resp?.items) {
                    this.seasons = resp.items;
                } else if (resp?.detail) {
                    if(Array.isArray(resp?.detail)){
                        throw new Error({message: resp.detail.map((error) => error.msg).join('\n')});
                    }
                    throw new Error({message: resp?.detail});
                }
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
        async fetchSeason({ seasonId }:{ seasonId:number }) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://futuramaapi.com/api/seasons/' + seasonId);
                const resp:SeasonDetail | RequestError = await response.json();
                if(resp?.id) {
                    this.seasonDetail = resp;
                } else if (resp?.detail) {
                    if(Array.isArray(resp?.detail)){
                        throw new Error({message: resp.detail.map((error) => error.msg).join('\n')});
                    }
                    throw new Error({message: resp?.detail});
                }
            } catch (error) {
                this.error = error.message;
                this.seasonDetail = null;
            } finally {
                this.loading = false;
            }
        },
        async fetchCharacters({ page = 1 }:{ page:number }) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=' + page + '&size=100');
                const resp:CharacterList | RequestError = await response.json();
                if(resp?.items) {
                    this.characters = resp.items;
                } else if (resp?.detail) {
                    if(Array.isArray(resp?.detail)){
                        throw new Error({message: resp.detail.map((error) => error.msg).join('\n')});
                    }
                    throw new Error({message: resp?.detail});
                }
            } catch (error) {
                this.error = error.message;
                this.characters = [];
            } finally {
                this.loading = false;
            }
        },
    },
});
