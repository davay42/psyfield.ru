<template lang="pug">
main.main
  transition(name="fade")
    .content(:class="{ 'full-width': frontmatter.fullWidth }"  :key="route.path")
      page-parents
      .text-4xl.font-bold.mb-8.flex.flex-wrap.items-center(v-if="frontmatter.title" :key="frontmatter.title") 
        .mr-2 {{ frontmatter.title }}
        .flex-1
        .mx-2.my-4.text-6xl {{ frontmatter.emoji }}
      .font-bold.mt-2.mb-4(v-if="frontmatter.subtitle") {{ frontmatter.subtitle }}
      content.content(:class="{ cards: !!frontmatter.cards }")
  row-list(
    v-if="frontmatter.list", 
    :rows="theme?.pages?.[frontmatter.list]"
    )
  page-footer
  page-next-prev
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { theme, frontmatter } = useData();
import { useRoute } from 'vitepress'

const route = useRoute()
</script>

<style lang="postcss" scoped>
.main {
  @apply px-4 pb-16 mt-8 pt-1  mx-auto
  md:(px-8);
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
