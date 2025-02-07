<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useSeasonStore } from '@/stores/seasonStore'
    import EpisodeCard from '@/components/EpisodeCard.vue'

    const info = ref('');
    const route = useRoute();
    const seasonStore = useSeasonStore();

    // watch the params of the route to fetch the data again
    watch(() => route.params.seasonId, fetchData, { immediate: true })
    async function fetchData(seasonId) {
        if(seasonId) {
            await seasonStore.fetchSeason(seasonId);
            const unsortedSeason = seasonStore.seasonDetail;
            info.value = {
                ...unsortedSeason,
                episodes: unsortedSeason.episodes.sort( ( a, b ) => a.number - b.number )
            };
        } else {
            info.value = seasonStore.seasonDetail;
        }
    }
</script>

<template>
    <div v-if="info && info.id > 1" class="season-button season-previous">
        <router-link  :to="`/season/${info.id - 1}`">Previous Season</router-link>
    </div>
    <div v-if="info">
        <h1>Season Detail - {{ info.id }}</h1>
        <p>Number of episodes: {{ info.episodes.length }}</p>
        <br>
        <div class="card-grid" v-if="info.episodes.length > 0">
            <EpisodeCard v-for="episode in info.episodes" :key="episode.id" :episode="episode" />
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
    <div v-if="info && info.id < seasonStore.seasonsCount" class="season-button season-next">
        <router-link  :to="`/season/${info.id + 1}`">Next Season</router-link>
    </div>
</template>
