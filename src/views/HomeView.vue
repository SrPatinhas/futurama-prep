<script setup lang="ts">
import Quote from '@/components/Quote.vue'
import { computed } from 'vue'

const img = [
    "https://image.tmdb.org/t/p/original/zPof3eV5fCtvMYqMMftFHYNhHmr.jpg",
    "https://image.tmdb.org/t/p/original/g0W9W1xB8L6fLLZAlmXNXgLWnS6.jpg",
    "https://image.tmdb.org/t/p/original/aGYVOLanNjLTvqlfdyp0mKBdFKH.jpg"
]

const randomImg = computed(() => {
    // get a random message
    const randomIndex = Math.floor(Math.random() * img.length)
    return img[randomIndex];
})
</script>

<template>
    <div class="bg-img" :style='{ backgroundImage: "url(" + randomImg + ")", }'></div>
    <Quote />
</template>

<style scoped>
    .bg-img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.2;
        filter: blur(5px);
    }
</style>
