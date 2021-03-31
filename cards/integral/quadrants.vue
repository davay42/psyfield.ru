<template lang="pug">
.grid.grid-cols-2.gap-4
  .flex.flex-col.p-4.bg-gray-100(class="dark:bg-warm-gray-800",v-for="q in quadrants", :key="q.content")
    .text-sm {{ q.lr }}–{{ q.tb }}
    .text-2xl.font-bold.mb-2 {{ q.subj }}
    .font-bold.mb-2 {{ q.what }}
    .q.mb-2 «{{ q.q }}»
    .mb-2 {{ q.real }}
    .text-md {{ q.content }}
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  quadrants: Object
});

</script>

<style lang="postcss" scoped>
</style>