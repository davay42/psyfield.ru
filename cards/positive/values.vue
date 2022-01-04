<template lang="pug">
.flex.flex-col 
  .row
    .icon
      la-layer-group
    .title Мудрость и знание

  .row
    .icon
      la-star
    .title Мужество

  .row
    .icon
      la-dove
    .title Любовь и гуманизм

  .row
    .icon
      la-balance-scale
    .title Справедливость

  .row
    .icon
      la-window-minimize
    .title Умеренность

  .row
    .icon
      la-praying-hands
    .title Духовность (трансцендентность)
</template>

<script setup>

</script>

<style scoped>
.row {
  @apply flex items-center my-4;
}
.icon {
  @apply py-2 mr-4 text-3xl;
}
.title {
  @apply p-2 flex-1 text-xl;
}
</style>