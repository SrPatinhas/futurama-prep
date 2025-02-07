import { defineStore } from 'pinia'

type BookmarksStoreProps = {
    bookmarkedSeasons: number[];
    bookmarkedEpisodes: number[];
    bookmarkedCharacters: number[];
}

export const useBookmarksStore = defineStore('bookmarks', {
    state: ():BookmarksStoreProps => ({
        bookmarkedSeasons: [],
        bookmarkedEpisodes: [],
        bookmarkedCharacters: [],
    }),
    getters: {
        // check if season is bookmarked
        isSeasonBookmarked: (state:BookmarksStoreProps) => {
            return (seasonId:number) => state.bookmarkedSeasons.includes( seasonId )
        },
        // check if episode is bookmarked
        isEpisodeBookmarked: (state:BookmarksStoreProps) => {
            return ( episodeId: number ) => state.bookmarkedEpisodes.includes( episodeId )
        },
        // check if character is bookmarked
        isCharacterBookmarked: (state:BookmarksStoreProps) => {
            return ( characterId: number ) => state.bookmarkedCharacters.includes( characterId )
        }
    },
    actions: {
        toggleSeasonBookmark( seasonId: number ) {
            // Check if the season is already bookmarks and remove it from the list
            if ( this.isSeasonBookmarked( seasonId ) ) {
                this.bookmarkedSeasons = this.bookmarkedSeasons.filter( id => id !== seasonId )
            } else {
                this.bookmarkedSeasons.push( seasonId )
            }
        },

        toggleEpisodesBookmark( episodeId: number ) {
            // Check if the episode is already bookmarks and remove it from the list
            if ( this.isEpisodeBookmarked( episodeId ) ) {
                this.bookmarkedEpisodes = this.bookmarkedEpisodes.filter( id => id !== episodeId )
            } else {
                this.bookmarkedEpisodes.push( episodeId )
            }
        },

        toggleCharacterBookmark( characterId: number ) {
            // Check if the character is already bookmarks and remove it from the list
            if ( this.isCharacterBookmarked( characterId ) ) {
                this.bookmarkedCharacters = this.bookmarkedCharacters.filter( id => id !== characterId )
            } else {
                this.bookmarkedCharacters.push( characterId )
            }
        }
    }
});
