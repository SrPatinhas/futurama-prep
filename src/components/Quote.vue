<script setup lang="ts">
    import { computed } from 'vue'

    const msgs = [
        {
            "quote": "I'm not a robot like you. I don't like having disks crammed into me... unless they're Oreos... and then only in the mouth.",
            "character": "Fry"
        },
        {
            "quote": "Start the ship, Leela! Let's just steal the dish and get back to our own time.",
            "character": "Professor Farnsworth"
        },
        {
            "quote": "But won't that change history?",
            "character": "Fry"
        },
        {
            "quote":"Oooh, a lesson in not changing history from \"Mr. I'm-my-own-grandpa\". Let's get the hell out of here already! Screw history!",
            "character": "Professor Farnsworth"
        },
        {
            "quote":"You know what the worst part about being a slave is? They make you do all this work, but they never pay you or let you go.",
            "character": "Fry"
        },
        {
            "quote":"That's the only part about being a slave",
            "character": "Leela"
        },
        {
            "quote":"Why, those are the Grunka-Lunkas. They work here in the Slurm factory",
            "character": "Glurmo"
        },
    ]
    const randomQuote = computed(() => {
        // get a random message
        const randomIndex = Math.floor(Math.random() * msgs.length)
        return msgs[randomIndex];
    })
</script>

<template>
    <div class="greetings">
        <h1>
            Welcome to the <b>Futurama</b> project!
        </h1>
        <h3 class="green quote">
            {{ randomQuote.quote }}
            <small>{{ randomQuote.character }}</small>
        </h3>
    </div>
</template>

<style scoped>

h1 {
    font-size: 1.6rem;
    margin-bottom: 24px;
}
h3 {
    font-weight: 500;
    font-size: 1.2rem;
    position: relative;
}
h3 small {
    font-size: 1rem;
    display: block;
    margin-top: 8px;
}
.quote {
    border-left: 1px solid #aaa;
    padding-left: 16px;
}
.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
