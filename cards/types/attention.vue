<template lang="pug">
div(class="xs:grid-cols-2 grid grid-cols-1 my-10 gap-4")
  div(class="dark-bg-violet-800 cell bg-violet-100")
    .text-4xl 😌
    h4 Внутри
    h5 Интроверт
    ul
      li Ориентирован на собственные мотивы, качества, картину мира. 
      li Трудно меняет точку зрения. 
      li Требуется усилие, чтобы выйти наружу к людям.
  div(class="dark-bg-lime-800 cell bg-lime-100")
    .text-4xl 🙂
    h4 Снаружи
    h5 Экстраверт
    ul
      li Ориентирован на внешние стимулы (события, обстоятельства, других людей). 
      li Нуждается в обратной связи. 
      li Требуется усилие, чтобы погрузиться внутрь себя.
  
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.cell {
  @apply p-6 shadow rounded;
}

h4 {
  @apply my-2 text-xl;
}

h5 {
  @apply my-2;
}

p {
  @apply text-lg m-0;
}
</style>