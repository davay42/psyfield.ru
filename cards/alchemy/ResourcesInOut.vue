<template lang="pug">
.grid.grid-cols-3.text-center.place-items-center.justify-items-stretch

    .cell.head.text-right Внутрь
    .cell.head.axis Ресурс
    .cell.head Наружу

    .cell Поведение
    .cell.axis.bg-ch-12-0(class="dark:bg-ch-12-0d") Имидж
    .cell Внешность

    .cell Потребление
    .cell.axis.bg-ch-12-1(class="dark:bg-ch-12-1d")  Экономика
    .cell Производство

    .cell Изучение
    .cell.axis.bg-ch-12-2(class="dark:bg-ch-12-2d")  Знания
    .cell Преподавание

    .cell Включенность
    .cell.axis.bg-ch-12-3(class="dark:bg-ch-12-3d")  Семья
    .cell Статус

    .cell Вкус
    .cell.axis.bg-ch-12-4(class="dark:bg-ch-12-4d")  Искусство
    .cell Творчество

    .cell Психика
    .cell.axis.bg-ch-12-5(class="dark:bg-ch-12-5d")  Здоровье
    .cell Тело

    .cell Получать
    .cell.axis.bg-ch-12-6(class="dark:bg-ch-12-6d")  Любовь
    .cell Отдавать

    .cell Удовлетворение
    .cell.axis.bg-ch-12-7(class="dark:bg-ch-12-7d")  Сексуальность
    .cell Желание

    .cell Принятие
    .cell.axis.bg-ch-12-8(class="dark:bg-ch-12-8d")  Сострадание
    .cell Помощь

    .cell Цели
    .cell.axis.bg-ch-12-9(class="dark:bg-ch-12-9d")  Труд
    .cell Результаты

    .cell Общение
    .cell.axis.bg-ch-12-10(class="dark:bg-ch-12-10d")  Дружба
    .cell Знакомство

    .cell Духовный опыт
    .cell.axis.bg-ch-12-11(class="dark:bg-ch-12-11d")  Транс
    .cell Ритуал

    
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.cell {
  @apply p-4 ;
}
.head {
  @apply font-bold;
}
.axis {
  @apply text-xl text-center;
}

.cell.axis + .cell {
  @apply text-left;
}

.cell:not(.axis) + .cell:not(.axis) {
  @apply text-right;
}

</style>