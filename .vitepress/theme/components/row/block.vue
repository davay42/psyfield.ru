<template lang="pug">
.block(
  style="background-color: var(--c-bg-secondary);"
  )
  a.flex.flex-col.min-content.flex-1(:href="item.path")
    .art.w-full.h-12em.bg-cover.bg-center.mb-8.rounded(v-if="item?.art", :style="{ backgroundImage: 'url(' + '/art/' + item.art + ')' }")
    .flex.flex-1.self-stretch.flex-wrap.items-center
      .mr-2.text-2xl(v-if="item?.emoji") {{ item?.emoji }}
      .text-2xl.flex.items-center.font-bold {{ item.title }}
      .flex-auto
    .text-md.mt-4.mb-2.font-normal(v-if="item.subtitle") {{ item.subtitle }}

</template>

<script setup>

const props = defineProps({
  item: Object,
  i: Number
});
</script>

<style lang="postcss" scoped>
.block {
  @apply p-4 my-8 flex flex-col items-stretch shadow-lg static md: p-8;
}

.art {
  filter: saturate(10%) opacity(70%);
  transition: all 200ms ease-in-out;
}

.block:hover .art {
  filter: saturate(50%);
}

a:hover {
  text-decoration: none;
}
</style>