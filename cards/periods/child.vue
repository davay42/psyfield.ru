<template lang="pug">
.flex.flex-col
  .flex.flex-col.my-4.shadow-xl.px-8.py-16(v-for="(epoch, i) in $frontmatter.epochs" ) 
    .flex.items-center.font-bold.mb-2.text-2xl.flex-wrap
      .flex-1 {{ epoch.title }}
      .flex-auto
      .flex-0 {{ epoch.age }}
    .flex.flex-col.p-4.my-4.shadow(v-for="(period, j) in epoch.periods", :style="levelColor(i * 2 + j, 6)") 
      .text-xl.flex.py-4
        .font-bold {{ period.title }} 
        .flex-auto
        .font-normal ({{ period.age }})

      .row
        .title Социальная ситуация развития
        .data {{ period.situation }}
      .row
        .title Ведущая деятельность
        .text-sm.-mt-2.mb-2 {{ j % 2 ? 'Операционно-техническая сфера' : 'Мотивационно-потребностная сфера' }}
        .data {{ period.action }}

      .row
        .title Новообразование
        .data {{ period.new }}
      .row
        .title Кризис
        .data(v-html="period.crysis") 
</template>

<script setup>

function levelColor(
  i = 0,
  n = 3,
  reverse = false,
  s = '50%',
  l = '50%',
  a = '0.2'
) {
  if (reverse) {
    i = n - i - 1
  }
  return {
    backgroundColor: `hsla(${i * (360 / n)}, ${s}, ${l}, ${a})`
  }
}

</script>

<style scoped>
.row {
  @apply flex flex-col my-2;
}

.title {
  @apply font-bold mb-2 border-b border-gray-500 border-opacity-50;
}

.data {
  flex: 1 1 auto;
}
</style>