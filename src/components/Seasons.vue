<script setup lang="ts">
    import { useSeasonStore } from '@/stores/seasonStore';
    import SeasonCard from '@/components/SeasonCard.vue'

    const seasonStore = useSeasonStore();

    seasonStore.fetchAllSeasons({});

    function loadMoreSeasons() {
        seasonStore.fetchAllSeasons({});
    }
</script>

<template>
    <div class="seasons">
        List of all seasons
        <button @click="loadMoreSeasons">
            Load Seasons
        </button>
    </div>
    <div class="seasons-list">
        <div class="card-grid" v-if="seasonStore.seasons.length > 0">
            <SeasonCard v-for="(season) in seasonStore.seasons" :key="season.id" :season=season />
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<style scoped>
    .seasons {
        font-size: 1.6rem;
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    button {
        background-color: rgb(231, 76, 60);
        border-color: rgb(231, 76, 60);
        color: white;

        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        line-height: inherit;
        cursor: pointer;
        text-transform: none;
    }
    .seasons-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
