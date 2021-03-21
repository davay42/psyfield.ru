<template lang="pug">
.grid.grid-cols-2.my-10.gap-4
  .cell.bg-violet-100(class="dark:bg-violet-800")
    h4 Внутри
    h5 Интроверт
    p Ориентирован на собственные мотивы, качества, картину мира. Трудно меняет точку зрения.
  .cell.bg-lime-100(class="dark:bg-lime-800")
    h4 Снаружи
    h5 Экстраверт
    p Ориентирован на внешние стимулы (события, обстоятельства, других людей). Нуждается в обратной связи.
  
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.cell
  @apply p-6 shadow rounded

  h4
    @apply my-2 text-xl

  h5
    @apply my-2 

  p
    @apply text-lg m-0
</style>