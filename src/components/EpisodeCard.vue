<script setup lang="ts">
    import { defineProps } from 'vue'
    import { EpisodeDetail, SeasonEpisode } from '@/types'
    import { useBookmarksStore } from '@/stores/bookmarksStore'

    const props = defineProps<{
        episode: EpisodeDetail | SeasonEpisode
    }>()

    const bookmark = useBookmarksStore();

    function addBookmark() {
        bookmark.toggleEpisodesBookmark(props.episode.id);
    }
</script>

<template>
    <div class="episode card">
        <header>
            <h3 class="title"><small>Episode:</small> <b>{{episode.name}}</b></h3>
        </header>
        <div class="image">
            <img src="https://image.tmdb.org/t/p/original/ubFM3JrH3p6BtCHWAlOuboC1obg.jpg" alt="image" width="800" height="600">
        </div>
        <div class="content">
            <p><small>Number:</small> {{ episode.number }}</p>
            <p><small>Production Code:</small> {{ episode.productionCode }}</p>
            <p v-if="episode.airDate != undefined"><small>Air Date:</small> {{ episode.airDate }}</p>
            <p v-if="episode.duration != undefined"><small>Duration:</small> {{ episode.duration }}</p>
        </div>
        <footer class="container">
            <div class="icons">
                <button :class="{'icon-button': true, 'bookmarked': bookmark.isEpisodeBookmarked(props.episode.id)}" @click="addBookmark">
                    {{ bookmark.isEpisodeBookmarked(props.episode.id) ? "<\/3" : "<3" }}
                </button>
            </div>
        </footer>
    </div>
</template>
