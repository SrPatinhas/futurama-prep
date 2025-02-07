<script setup lang="ts">
    import { defineProps } from 'vue'
    import { CharacterDetail } from '@/types'
    //import { useBookmarksStore } from '@/stores/bookmarksStore'

    /*const props = */defineProps<{
        character: CharacterDetail
    }>()

    /*const bookmark = useBookmarksStore();

    function addBookmark() {
        bookmark.toggleCharacterBookmark(props.character.id);
    }*/
</script>

<template>
    <div class="episode card">
        <header>
            <h3 class="title"><small>Episode:</small> <b>{{character.name}}</b></h3>
        </header>
        <div class="image">
            <img :src="character.image" alt="image" width="800" height="600">
        </div>
        <div class="content">
            <p><small>Gender:</small> {{ character.gender }}</p>
            <p><small>Status:</small> {{ character.status }}</p>
            <p><small>Specie:</small> {{ character.species }}</p>
        </div>
<!--        <footer class="container">
            <div class="icons">
                <button :class="{'icon-button': true, 'bookmarked': bookmark.toggleCharacterBookmark(character.id)}" @click="addBookmark">
                    {{ bookmark.toggleCharacterBookmark(character.id) ? "<\/3" : "<3" }}
                </button>
            </div>
        </footer>-->
    </div>
</template>
