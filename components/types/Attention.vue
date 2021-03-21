<template lang="pug">
.grid.grid-cols-2.mb-30.gap-4
  .cell.bg-violet-100(class="dark:bg-violet-800")
    h4 Внутри
    p Ориентация на собственные мотивы, качества, картину мира. Трудно изменяемая точка зрения.
  .cell.bg-lime-100(class="dark:bg-lime-800")
    h4 Снаружи
    p Ориентация на внешние стимулы (события, обстоятельства, других людей). Высокая потребность в обратной связи.

  
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.cell
  @apply p-6 shadow rounded

  h4
    @apply my-2 text-xl

  p
    @apply text-lg m-0
</style>