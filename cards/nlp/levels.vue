<template lang="pug">
.flex.flex-col.mt-12
  .mb-8
    .text-lg.font-bold Условные обозначения:
    .flex.items-center.p-2
      la-eye.text-2xl.mr-2
      span Направление внимания
    .flex.items-center.p-2
      la-compress.text-2xl.mr-2
      span Внутренний фокус
    .flex.items-center.p-2
      la-expand.text-2xl.mr-2
      span Внешний фокус
  .flex.flex-wrap.mb-12.shadow-md(v-for="(level,i) in levels", :key="level.title")
    .p-4.flex-0.w-full(class="sm:w-180px",:style="levelColor(i, levels.length, true, '60%')") 
      la-globe.icon(v-if="i == 0")
      la-user.icon(v-if="i == 1")
      la-book.icon(v-if="i == 2")
      la-list.icon(v-if="i == 3")
      la-running.icon(v-if="i == 4")
      la-dot-circle.icon(v-if="i == 5")
      .font-bold.text-xl.mb-4 {{ level.title }} 
      .font-bold {{ level.q }}
    .p-4.flex-1.flex.flex-col(:style="levelColor(i, levels.length, true, undefined, '40%', '0.1')")  
      .flex.mb-2.items-center
        la-eye.mr-4
        .p-2 {{ level?.subtitle }}
      .flex.my-2.items-center
        la-compress.mr-4
        .p-2 {{ level?.inside }}
      .flex.mt-2.items-center
        la-expand.mr-4
        .p-2 {{ level?.outside }}
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

const levels = [
  {
    title: 'Миссия',
    q: 'Для кого?',
    subtitle: 'Цели и смыслы за пределами себя',
    inside: 'Духовность, сострадание, служение',
    outside: 'Поле отношений, сопричастность'
  },
  {
    title: 'Идентичность',
    q: 'Кто?',
    subtitle: 'Самооценка, самосознание',
    inside: 'Цель, вклад, миссия',
    outside: 'Выживание, признание, амбиции'
  },
  {
    title: 'Убеждения',
    q: 'Почему?',
    subtitle: 'Ценности, мотивации, разрешения',
    inside: 'Придаваемый событиям смысл',
    outside: 'Позиция, принципы, ожидания'
  },
  {
    title: 'Способности',
    q: 'Как?',
    subtitle: 'Стратегии, умения, навыки',
    inside: 'Ментальные карты деятельности',
    outside: 'Возможности, выбор, адаптация'
  },
  {
    title: 'Деятельность',
    q: 'Что?',
    subtitle: 'Конкретные действия, методы работы',
    inside: 'Паттерны деятельности, привычки',
    outside: 'Взаимодействие и коммуникация'
  },
  {
    title: 'Окружение',
    q: 'Где? Когда?',
    subtitle: 'Материя, данная нам в ощущениях',
    inside: 'Телесность и эмоции',
    outside: 'Место, время, обстоятельства',
  },

]

</script>


<style lang="postcss" scoped>
.icon {
  @apply text-4xl mb-2;
}
</style>