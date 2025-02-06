<script setup lang="ts">
    import { defineProps } from 'vue'
    import { EpisodeDetail } from '@/types'

    const props = defineProps<{
        episode: EpisodeDetail
    }>()

    console.log(props.episode)
</script>

<template>
    <div class="episode">
        <h1>This is an episode page</h1>
    </div>
</template>

<style scoped>

</style>
