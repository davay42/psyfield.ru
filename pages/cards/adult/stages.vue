<template lang="pug">
.flex.flex-col
  .flex.flex-col(v-for="epoch in $frontmatter.epochs")  
    h1.text-2xl.font-bold {{ epoch.title }}
    .flex.flex-col.py-4(v-for="period in epoch.periods") 
      .text-xl.flex.py-4
        .font-bold {{ period.title }} 
        .flex-auto
        .font-normal ({{ period.age }})
      .row
        .title Социальная ситуация развития
        .data {{ period.situation }}
      .row
        .title Ведущая деятельность
        .data {{ period.action }}
      .row
        .title Новообразование
        .data {{ period.new }}
</template>

<script setup>

function levelColor(
  i = 0,
  n = 3,
  reverse = false,
  s = '50%',
  l = '50%',
  a = '0.5'
) {
  if (reverse) {
    i = n - i - 1
  }
  return {
    backgroundColor: `hsla(${i * (360 / n)}, ${s}, ${l}, ${a})`
  }
}

</script>

<style lang="postcss" scoped>
.row {
  @apply flex flex-wrap my-2;
}

.title {
  @apply font-bold;
}

.data {
  flex: 1 1 auto;
}
</style>