<template lang="pug">
.grid.grid-cols-1.gap-4.my-10(class="xs:grid-cols-2", v-if="level == 1")
  .cell.bg-pink-300(class="dark:bg-pink-700")
    h4 Властелин
    h5 Психопатический
  .cell.bg-amber-300(class="dark:bg-amber-700") 
    h4 Звезда
    h5 Истероидный
  .cell.bg-light-blue-300(class="dark:bg-blue-700") 
    h4 Наблюдатель
    h5 Аутичный
  .cell.bg-green-300(class="dark:bg-green-700")
    h4 Эстет
    h5 Эпилептоидный

.grid.grid-cols-1.gap-4.my-10(class="xs:grid-cols-2", v-if="level == 2")
  .cell.bg-pink-200(class="dark:bg-pink-800")
    h4 Законодатель
    h5 Маниакальный
  .cell.bg-amber-200(class="dark:bg-amber-800") 
    h4 Принц
    h5 Нарциссичный
  .cell.bg-light-blue-200(class="dark:bg-blue-800") 
    h4 Хозяин
    h5 Компульсивный
  .cell.bg-green-200(class="dark:bg-green-800")
    h4 Служитель
    h5 Депрессивный

.grid.grid-cols-1.gap-4.my-10(class="xs:grid-cols-2", v-if="level == 3")
  .cell.bg-pink-100(class="dark:bg-pink-900")
    h4 Идеолог
    h5 Шизоидный
  .cell.bg-amber-100(class="dark:bg-amber-900") 
    h4 Революционер
    h5 Симбиотический
  .cell.bg-light-blue-100(class="dark:bg-blue-900") 
    h4 Детектив
    h5 Параноидальный
  .cell.bg-green-100(class="dark:bg-green-900")
    h4 Философ
    h5 Избегающий
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

defineProps({
  level: {
    type: Number,
    default: 1,
  }
});
</script>

<style lang="stylus" scoped>
.cell
  @apply p-6 shadow rounded

  h4
    @apply mt-2 mb-4 text-xl

  h5
    @apply mb-2

  p
    @apply text-lg m-0
</style>