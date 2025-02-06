import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBookmarksStore = defineStore( 'bookmarks', () => {
    const bookmarkedSeasons = ref<number[]>( [] );
    const bookmarkedEpisodes = ref<number[]>( [] );
    const bookmarkedCharacters = ref<number[]>( [] );

    function toggleSeasonBookmark( seasonId: number ) {
        // Check if the season is already bookmarks and remove it from the list
        if(isSeasonBookmarked( seasonId )) {
            bookmarkedSeasons.value = bookmarkedSeasons.value.filter( id => id !== seasonId )
        } else {
            bookmarkedSeasons.value.push( seasonId )
        }
    }

    function toggleEpisodesBookmark( episodeId: number ) {
        // Check if the episode is already bookmarks and remove it from the list
        if(isEpisodeBookmarked( episodeId )) {
            bookmarkedEpisodes.value = bookmarkedEpisodes.value.filter( id => id !== episodeId )
        } else {
            bookmarkedEpisodes.value.push( episodeId )
        }
    }

    function toggleCharacterBookmark( characterId: number ) {
        // Check if the character is already bookmarks and remove it from the list
        if(isCharacterBookmarked( characterId )) {
            bookmarkedCharacters.value = bookmarkedCharacters.value.filter( id => id !== characterId )
        } else {
            bookmarkedCharacters.value.push( characterId )
        }
    }

    // check if season is bookmarked
    function isSeasonBookmarked( seasonId: number ) {
        return bookmarkedSeasons.value.includes( seasonId )
    }
    // check if episode is bookmarked
    function isEpisodeBookmarked( episodeId: number ) {
        return bookmarkedEpisodes.value.includes( episodeId )
    }
    // check if character is bookmarked
    function isCharacterBookmarked( characterId: number ) {
        return bookmarkedCharacters.value.includes( characterId )
    }

    return {
        isEpisodeBookmarked, isSeasonBookmarked, isCharacterBookmarked,
        toggleEpisodesBookmark, toggleSeasonBookmark, toggleCharacterBookmark
    }
});
