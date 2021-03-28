<template lang="pug">
.table
      .icon
        la-user-check 
      .p-4 С людьми все в порядке. Поэтому каждая личность подлинна, важна и достойна равного уважения.
      
      .icon
        la-thumbs-up
      .p-4.flex-1 Положительное подкрепление ощущения усиливает его.
      
      .icon
        la-heart
      .p-4 У каждого человека внутри есть ядро, способное любить и желающее положительного развития.
      
      .icon
        la-brain
      .p-4 Каждый (за исключением больных с сильными травмами мозга) имеет способность мыслить.

      .icon
        la-gem
      .p-4 Каждая из множества граней личности имеет для нее какой-то положительный смысл.
      
      .icon
        la-code-branch
      .p-4 Люди сами определяют свою историю и судьбу, поэтому эти решения могут быть изменены.
      .icon
        la-grin
      .p-4 Все эмоциональные трудности излечимы.
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.table {
  grid-template-columns: 60px 1fr;
  justify-content: center;
  @apply grid items-center;
}

.icon {
  @apply text-4xl text-center p-4;
}
</style>