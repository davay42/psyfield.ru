<template lang="pug">
main.main
  transition(name="fade")
    .content(:class="{ 'full-width': frontmatter.fullWidth }"  :key="route.path")
      page-parents
      .font-bold.mb-4(v-if="frontmatter.subtitle") {{ frontmatter.subtitle }}
      .text-4xl.font-bold.flex.flex-wrap.items-center(v-if="frontmatter.title" :key="frontmatter.title") 
        .mr-2 {{ frontmatter.title }}
        .flex-1
        .mx-2.my-4.text-6xl {{ frontmatter.emoji }}

      content.content(:class="{ cards: !!frontmatter.cards }")
  row-list(
    v-if="frontmatter.list", 
    :rows="pages[route.path]"
    )
  page-footer
  page-next-prev
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { pages } from '../../composables/pages'

const { theme, frontmatter } = useData();

const route = useRoute()
</script>

<style lang="postcss" scoped>
.main {
  @apply px-4 pb-16 mt-8 pt-1 mx-auto md: (px-8);
}

.content {
  padding-bottom: 1.5rem;
  @apply max-w-55ch mx-auto;
}

.content.cards {
  @apply max-w-65ch mx-auto;
}

.content tbody tr td:nth-child(1) {
  white-space: nowrap;
}
</style>
