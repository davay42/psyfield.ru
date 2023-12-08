<script setup>
const props = defineProps({
  url: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>

<template lang='pug'>
a.card(
  :href="url"
  )
  .text-2xl {{ title }}
  .text-md {{ description }}
</template>

<style lang="postcss" >
.card {
  @apply no-underline text-dark-800 dark-text-light-300 flex flex-col gap-4 p-4 shadow hover-shadow-lg transition border-1 dark-border-light-800 dark-border-opacity-30 rounded-lg my-6
}
</style>