<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/seasons">Seasons</RouterLink>
            <RouterLink to="/characters">Characters</RouterLink>
        </nav>
    </header>
    <main>
        <div class="wrapper">
            <RouterView />
        </div>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    place-items: center;
    background: var(--color-background);
    z-index: 3;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    nav {
        text-align: center;
        font-size: 1rem;
        padding: 1rem 0;
    }
}
</style>
