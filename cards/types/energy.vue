<template lang="pug">
.grid.grid-cols-1.mt-10.gap-4
  .cell.bg-orange-100(class="dark:bg-orange-800")
    h4 Активный
    h5 Влияющий
    p Воздействует на окружение для получения желаемого и реализации себя. Влияет на окружающих, инициирует начинания.
  .cell.bg-blue-100(class="dark:bg-blue-800") 
    h4 Пассивный
    h5 Восринимающий
    p Действует неохотно. Испытывает дефицит ресурсов и жизненной энергии. Встраивается, реагирует, адаптируется.

  
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.cell
  @apply p-6 shadow rounded

  h4
    @apply mb-2 text-xl

  h5
    @apply my-2 

  p
    @apply text-lg m-0
</style>