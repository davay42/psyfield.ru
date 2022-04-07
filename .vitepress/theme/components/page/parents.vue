<script setup>
import { useData, useRoute } from 'vitepress'
import { useParents } from '../../composables/pages'

const route = useRoute()

const parents = computed(() => useParents(route.path))

</script>

<template lang="pug">
.flex.flex-wrap.mb-4.text-lg
  .flex-1(v-for="page in parents", :key="page.title") 
    a(:href="page.path") {{ page.title }}
</template>


