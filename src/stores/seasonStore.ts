import { defineStore } from 'pinia';
import { CharactersList, RequestError, SeasonDetail, SeasonsList } from '../types'

type seasonStoreProps = {
    seasons: SeasonDetail[];
    seasonDetail: SeasonDetail;
    characters: CharactersList;
    loading: boolean;
    error: string | null;
}

export const useSeasonStore = defineStore('season', {
    state: ():seasonStoreProps => ({
        seasons: [],
        seasonDetail: {} as SeasonDetail,
        characters: {} as CharactersList,
        loading: false,
        error: null
    }),
    getters: {
        seasonsCount: (state) => state.seasons.length,
        episodesCount: (state) => state.seasons.reduce((acc, season) => acc + (season?.episodes?.length ?? 0), 0),
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
        async fetchSeason( seasonId:number ) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://futuramaapi.com/api/seasons/' + seasonId);
                const resp:SeasonDetail | RequestError = await response.json();
                if(resp?.id) {
                    this.seasonDetail = resp as SeasonDetail;
                } else if (resp?.detail) {
                    if(Array.isArray(resp?.detail)){
                        throw new Error(resp.detail.map((error) => error.msg).join('\n'));
                    }
                    throw new Error(resp?.detail);
                }
            } catch (error) {
                this.error = error.message;
                this.seasonDetail = {} as SeasonDetail;
            } finally {
                this.loading = false;
            }
        },
        async fetchCharacters({ page = 1 }:{ page:number }) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=' + page + '&size=20');
                const resp:CharactersList | RequestError = await response.json();
                if(resp?.items) {
                    this.characters = resp as CharactersList;
                } else if (resp?.detail) {
                    if(Array.isArray(resp?.detail)){
                        throw new Error({message: resp.detail.map((error) => error.msg).join('\n')});
                    }
                    throw new Error({message: resp?.detail});
                }
            } catch (error) {
                this.error = error.message;
                this.characters = {} as CharactersList;
            } finally {
                this.loading = false;
            }
        },
    },
});
