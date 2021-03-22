<template lang="pug">
.table

  .head Обобщенный уровень
  .head Частный уровень
  .head Ключевой вопрос

  .common.bg-ch-3-2(class="dark:bg-ch-3-2d") Смысловой
  .cell.bg-ch-9-8(class="dark:bg-ch-9-8d") Смысл
  .cell.q.bg-ch-9-8(class="dark:bg-ch-9-8d") Во имя чего?

  .cell.font-bold.bg-ch-9-7(class="dark:bg-ch-9-7d")  Миссия*
  .cell.q.bg-ch-9-7(class="dark:bg-ch-9-7d")  Для кого?

  .cell.font-bold.bg-ch-9-6(class="dark:bg-ch-9-6d")  Идентичность
  .cell.q.bg-ch-9-6(class="dark:bg-ch-9-6d")  Кто?

  .common.bg-ch-3-1(class="dark:bg-ch-3-1d")  Интенциональный
  .cell.font-bold.bg-ch-9-5(class="dark:bg-ch-9-5d")  Убеждения
  .cell.q.bg-ch-9-5(class="dark:bg-ch-9-5d")  Почему?

  .cell.bg-ch-9-4(class="dark:bg-ch-9-4d")  Ценности
  .cell.q.bg-ch-9-4(class="dark:bg-ch-9-4d")   Зачем?

  .cell.bg-ch-9-3(class="dark:bg-ch-9-3d")  Намерения
  .cell.q.bg-ch-9-3(class="dark:bg-ch-9-3d")   Для чего?

  .common.bg-ch-3-0(class="dark:bg-ch-3-0d")  Инструментальный
  .cell.font-bold.bg-ch-9-2(class="dark:bg-ch-9-2d") Способности
  .cell.q.bg-ch-9-2(class="dark:bg-ch-9-2d")  Как?

  .cell.font-bold.bg-ch-9-1(class="dark:bg-ch-9-1d") Действия
  .cell.q.bg-ch-9-1(class="dark:bg-ch-9-1d") Что?

  .cell.font-bold.bg-ch-9-0(class="dark:bg-ch-9-0d") Окружение
  .cell.q.bg-ch-9-0(class="dark:bg-ch-9-0d")  Где, когда?

p 
  strong * Жирным шрифтом 
  span выделены 6 первоначальных нейрологических уровней Дилтса

</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.table {
  @apply grid grid-cols-3 text-center items-stretch;
}
.head {
  @apply p-4 font-bold;
}
.common {
  @apply p-4 row-span-3 flex items-center text-center bg-opacity-20;
}
.cell {
  @apply p-4;
}
.q {
  @apply bg-opacity-50;
}
</style>