<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
    // v-model value
    value: {
        type: Number,
        required: true,
    },
    length: {
        type: Number,
        default: 0,
        validator: (val:number) => val % 1 === 0,
    },
    // when number of page buttons exceeds the parent container,
    // it will truncate the buttons automatically
    totalVisible:  {
        type: Number,
        default: 5,
    },
    disabled: Boolean,
})
const emit = defineEmits(['input', 'next', 'previous']);
const maxButtons = ref(0);

const isValueLast = computed(() => {
    return props.value >= props.length;
});

const isValueFirst = computed(() => {
    return props.value <= 1;
});
const items = computed(() => {
    const maxLength = props.totalVisible > maxButtons.value
        ? maxButtons.value
        : props.totalVisible || maxButtons.value;

    if (props.length <= maxLength || maxLength < 1) {
        return getRange(1, props.length);
    }

    const even = maxLength % 2 === 0 ? 1 : 0;
    const left = Math.floor(maxLength / 2);
    const right = props.length - left + 1 + even;

    if (props.value > left && props.value < right) {
        const start = props.value - left + 2;
        const end = props.value + left - 2 - even;

        return [1, '...', ...getRange(start, end), '...', props.length];
    }
    else if (props.value === left) {
        const end = props.value + left - 1 - even;

        return [...getRange(1, end), '...', props.length];
    }
    else if (props.value === right) {
        const start = props.value - left + 1;

        return [1, '...', ...getRange(start, props.length)];
    }
    else {
        return [...getRange(1, left), '...', ...getRange(right, props.length)];
    }
});

const goNext = (e) => {
    e.preventDefault();
    emit('input', props.value + 1);
    emit('next');
}

const goPrevious = (e) => {
    e.preventDefault();
    emit('input', props.value - 1);
    emit('previous');
}

const getRange = (from, to) => {
    const range = [];
    from = from > 0 ? from : 1;
    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range;
}
const gotToPage = (page:number) => {
    emit('input', page);
}
</script>

<template>
    <ul :class="['pagination', { disabled: disabled }]">
        <li ref="navPrev">
            <button
                :class="['pagination-navigation', { disabled: isValueFirst }]"
                v-on="isValueFirst ? {} : { click: goPrevious }"
            >
                <slot name="prev-icon">$prev</slot>
            </button>
        </li>

        <li v-for="(item, index) in items" :key="'paging_' + index">
                <span
                    v-if="isNaN(Number(item))"
                    class="pagination-more"
                >{{ item }}</span>

            <button
                v-else
                type="button"
                :data-page="item"
                :class="['pagination-item', { active: item === value }]"
                @click="gotToPage(item)"
            >{{ item }}</button>
        </li>

        <li ref="navNext">
            <button
                type="button"
                :class="['pagination-navigation', { disabled: isValueLast }]"
                v-on="isValueLast ? {} : { click: goNext }"
            >
                <slot name="next-icon">$next</slot>
            </button>
        </li>
    </ul>
</template>

<style scoped>

</style>
