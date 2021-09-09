<template lang="pug">
main.main
  .content(:class="{ 'full-width': frontmatter.fullWidth }")
    page-parents
    .text-4xl.font-bold.mb-8.flex.flex-wrap.items-center(v-if="frontmatter.title" :key="frontmatter.title") 
      .mr-2 {{ frontmatter.title }}
      .flex-1
      .mx-2.my-4.text-6xl {{ frontmatter.emoji }}
    .flex.items-center(v-if="frontmatter.price")
      .text-xl.font-bold.rounded-xl.text-orange-800.p-2.mr-2(class="dark:text-orange-200") {{ $frontmatter.price }}
      a.text-xl.font-bold.rounded-xl.bg-orange-300.px-2.py-1(href="/contact") Заказать
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
const { site, frontmatter } = useData();
</script>

<style scoped>
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
