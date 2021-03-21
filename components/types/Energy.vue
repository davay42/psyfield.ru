<template lang="pug">
.grid.grid-cols-1.mt-5.mb-30.gap-4
  .cell.bg-orange-100(class="dark:bg-orange-800")
    h4 Активный
    p Воздействует на окружение для получения желаемого и реализации себя
  .cell.bg-blue-100(class="dark:bg-blue-800") 
    h4 Пассивный
    p Действует неохотно. Испытывает дефицит ресурсов и жизненной энергии

  
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.cell
  @apply p-6 shadow rounded

  h4
    @apply mb-4 text-xl

  p
    @apply text-lg m-0
</style>