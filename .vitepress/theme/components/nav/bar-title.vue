<template>
  <a class="nav-bar-title" :href="localePath" :aria-label="`${site.title}, назад в начало`">
    <img v-if="theme.logo" class="mr-3 align-bottom h-30px" :src="theme.logo" alt="Logo" />
    {{ site.title }}
  </a>
</template>

<script setup>
import { useData } from 'vitepress'

const { site, theme, localePath } = useData();

</script>

<style lang="postcss" scoped>
.nav-bar-title {
  @apply text-xl md:text-1.3rem font-semibold text-$c-text
    inline-flex items-center whitespace-nowrap
    hover:no-underline;
}
</style>
