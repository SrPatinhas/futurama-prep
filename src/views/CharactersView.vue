<script setup lang="ts">
    import { ref } from 'vue'
    import { useSeasonStore } from '@/stores/seasonStore'
    import CharacterCard from '@/components/CharacterCard.vue'
    import Pagination from '@/components/Pagination.vue'
    import { CharactersList } from '@/types'

    const seasonStore = useSeasonStore();
    const charactersList:CharactersList = ref('');
    const page = ref(1);

    // watch the params of the route to fetch the data again
    async function fetchData() {
        await seasonStore.fetchCharacters({page: page.value});
        charactersList.value = seasonStore.characters;
    }

    const updatePage = (value:number) => {
        page.value = value;
        fetchData();
    }
    // call for the first page
    fetchData();
</script>

<template>
    <div v-if="charactersList">
        <h1>Characters List</h1>
        <br>
        <div class="card-grid" v-if="charactersList.items.length > 0">
            <CharacterCard v-for="character in charactersList.items" :key="character.id" :character="character" />
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
    <div v-if="charactersList && charactersList.pages > 1">
        <Pagination value="page" :length="charactersList.pages" @input="updatePage" />
    </div>
</template>
