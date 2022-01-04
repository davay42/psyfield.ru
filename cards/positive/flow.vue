<template lang="pug">
.flex.flex-col
  .flex
.row
  .icon
    la-bullseye
  .text 
    .title Ясные цели
    .font-normal Различимые ожидания и правила
.row
  .icon
    la-search-plus.
  .text 
    .title Концентрация и фокус внимания
    .font-normal  Высокая степень концентрации на ограниченной сфере внимания (человек, занимающийся деятельностью, имеет возможность на ней концентрироваться и глубоко в неё погружаться)
.row
  .icon
    la-cloud-upload-alt.
  .text 
    .title Исчезновение рефлексии и чувства самоосознания
    .font-normal Слияние действия и осознанности
.row
  .icon
    la-hourglass-half.
  .text 
    .title Искажённое восприятие времени
    .font-normal Потеря чувства времени
.row
  .icon
    la-sync.
  .text 
    .title Прямая и незамедлительная обратная связь 
    .font-normal Успехи и неудачи в процессе деятельности очевидны, так что поведение может быть изменено по мере необходимости
.row
  .icon
    la-pencil-ruler.
  .text 
    .title Равновесие между уровнем способностей субъекта и сложностью задания
    .font-normal Деятельность не оказывается для субъекта слишком лёгкой или сложной
.row
  .icon
    la-hat-cowboy-side.
  .text 
    .title Ощущение полного контроля
    .font-normal  над ситуацией или деятельностью.
.row
  .icon
    la-swimmer.
  .text 
    .title Деятельность сама по себе воспринимается как награда,
    .font-normal так что она осуществляется без усилий.

</template>

<script setup>

</script>

<style lang="postcss" scoped>
.row {
  @apply flex items-center my-4;
}
.icon {
  @apply py-2 mr-4 text-3xl;
}
.text {
  @apply p-2 flex-1;
}
.title {
  @apply mb-1 font-bold;
}
</style>