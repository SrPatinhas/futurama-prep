<script setup lang="ts">
import { defineProps } from 'vue'
    import { SeasonDetail } from '@/types'
    import { useBookmarksStore } from '@/stores/bookmarksStore'

    const props = defineProps<{
        season: SeasonDetail
    }>()

    const bookmark = useBookmarksStore();

    function addBookmark() {
        bookmark.toggleSeasonBookmark(props.season.id);
    }
</script>

<template>
    <div class="card">
        <header>
            <h3 class="title">Season {{season.id}}</h3>
        </header>
        <div class="image">
            <img src="https://image.tmdb.org/t/p/original/ubFM3JrH3p6BtCHWAlOuboC1obg.jpg" alt="image" width="800" height="600">
        </div>
        <footer class="container">
            <div class="account">
                <router-link :to="`/season/${season.id}`">Ver Season > </router-link>
            </div>
            <div class="icons">
                <button :class="{'icon-button': true, 'bookmarked': bookmark.isSeasonBookmarked(props.season.id)}" @click="addBookmark">
                    {{ bookmark.isSeasonBookmarked(props.season.id) ? "<\/3" : "<3" }}
                </button>
            </div>
        </footer>
    </div>
</template>
