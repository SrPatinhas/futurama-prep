<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useSeasonStore } from '@/stores/seasonStore'

    const info = ref('');
    const route = useRoute();
    const seasonStore = useSeasonStore();


    watch(
        () => route.params.id,
        (newId, oldId) => {
            console.log("mewId", newId);
            // react to route changes...
            if(newId !== oldId && newId) {
                info.value = seasonStore.fetchSeason(newId);
            } else {
                info.value = seasonStore.seasonDetail;
            }
        }
    )
</script>

<template>
    <div>
        <h1>Season Detail</h1>
        <p>{{ info }}</p>
        <br>
        <p>Season ID: {{ info.season.id }}</p>
        <p>Episode Name: {{ info.name }}</p>
        <p>Episode Number: {{ info.number }}</p>
        <p>Air Date: {{ info.airDate }}</p>
        <p>Duration: {{ info.duration }}</p>
    </div>
</template>
