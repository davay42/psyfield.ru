<script setup>
import { useData, useRoute } from 'vitepress'
import { useParents } from '../../composables/pages'

const route = useRoute()

const parents = computed(() => useParents(route.path))

</script>

<template lang="pug">
.flex.flex-wrap.mb-4.text-lg.gap-2
  .flex-1.p-2.bg-light-200.dark_bg-dark-200(v-for="page in parents", :key="page.title") 
    a(:href="page.path") {{ page.title }}
</template>


