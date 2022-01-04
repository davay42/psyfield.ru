<template lang="pug">
header.home-hero(v-if="showHero")
  .text-left.max-w-40em.m-auto
    figure(v-if="$frontmatter.heroImage")
      img.block.w-auto(:src="$frontmatter.heroImage", :alt="$frontmatter.heroAlt")
    .ml-2
      h1#main-title.text-4xl.mb-4.leading-10.text-center(v-if="hasHeroText") {{ heroText }}

      p.m-0.mt-1.text-xl.leading-6.text-center(v-if="hasTagline") {{ tagline }}

      .mt-8.text-center
        a.action(v-if="hasAction", :href="data.actionLink") {{ data.actionText }}
        a.action.alt(v-if="hasAltAction", :href="data.altActionLink") {{ data.altActionText }}
</template>

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { site, frontmatter: data } = useData()

const showHero = computed(() => {
  return (
    data.value.heroImage
    || hasHeroText.value
    || hasTagline.value
    || hasAction.value
  )
})

const hasHeroText = computed(() => data.value.heroText !== null)
const heroText = computed(() => data.value.heroText || site.value.title)

const hasTagline = computed(() => data.value.tagline !== null)
const tagline = computed(() => data.value.tagline || site.value.description)

const hasAction = computed(() => data.value.actionLink && data.value.actionText)
const hasAltAction = computed(
  () => data.value.altActionLink && data.value.altActionText,
);
</script>

<style scoped>
.home-hero {
  min-height: calc(100vh - var(--header-height));
  @apply pt-10 pb-11 px-4 md:px-6 text-center sm:(py-14) md:(pt-16 pb-17) flex;
}

.links {
  @apply flex space-x-6 xs:(mt-12);
}

.action {
  @apply inline-block mx-2;
}

.action {
  @apply rounded-lg
    inline-block px-4 py-2.5
    text-lg text-white
    bg-$c-brand border-2px border-$c-brand transition-colors
    xs:(text-xl px-5 py-2.8);
}

.action.alt {
  @apply bg-transparent text-$c-brand;
}

.action.alt:hover {
  @apply text-$c-brand-light bg-transparent border-$c-brand-light;
}

.action:hover {
  @apply no-underline bg-$c-brand-light border-$c-brand-light;
}
</style>
