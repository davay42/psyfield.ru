<template lang="pug">
.card.my-8.flex.relative
  .text-8xl.mr-4.absolute.right-2.top-2 {{ emotion?.icon }}
  .info
    .text-lg.font-bold.mb-2 {{ emotion?.title }}
    .q Стимул: 
      span.font-bold {{ emotion?.event }}
    .q Когниция: 
      span.font-bold {{ emotion?.q }}
    .q Переживание: 
      span.font-bold {{ emotion?.feeling }}
    .q Поведение: 
      span.font-bold {{ emotion?.doing }}
    .text {{ emotion?.text }}
</template>

<script setup>
const props = defineProps({
  emotion: Object,
  id: Number,
});

</script>

<style lang="postcss" scoped>
.q {
  @apply mb-2;
}
</style>