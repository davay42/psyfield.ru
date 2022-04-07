<script setup lang="ts">
import { useSideBar } from '../../composables/sideBar.js'

const items = useSideBar()
</script>

<template lang="pug">
ul.sidebar-links(v-if="items.length > 0")
  sidebar-link(v-for="item of items" :key="item.text" :item="item")
</template>



