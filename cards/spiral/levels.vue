<template lang="pug">
.flex.flex-col.mt-12
  .flex.flex-wrap.mb-12.shadow-md(v-for="(level) in lev", :key="level.title")
    .p-4.flex-0.w-full(class="sm:w-180px", :style="{ backgroundColor: level.color }") 
      .font-bold.text-xl.mb-4 {{ level.title }} 
      .font-bold {{ level.purpose }}
      .mt-4 
        span.font-bold {{ level?.subject }}: 
        span «{{ level?.motto }}»
    .p-4.flex-1.flex.flex-col.bg-warm-gray-50(class="dark:bg-warm-gray-700")
      .flex.flex-1.mb-2.items-center.py-1(v-for="challenge in level.challenges", :key="challenge") {{ challenge }} 
</template>

<script setup>

const lev = [
  {
    title: 'Бежевый',
    color: 'hsla(40, 40%, 50%, 0.5)',
    purpose: 'Выживание',
    motto: 'Выражай себя для удовлетворения физиологических потребностей',
    subject: 'Я',
    challenges: [
      'Быть "ОК" прямо сейчас',
      'Не испытывать боли',
      'Испытывать удовольствие'
    ]
  },
  {
    title: 'Фиолетовый',
    color: 'hsla(280, 50%, 50%, 0.5)',
    purpose: 'Магия',
    motto: 'Подавляй желания в угоду предков',
    subject: 'Мы',
    challenges: [
      'Безопасность прямо сейчас',
      'Уверенность в завтра',
      'Быть принятым'
    ]
  },
  {
    title: 'Красный',
    color: 'hsla(0, 50%, 50%, 0.5)',
    purpose: 'Сила',
    motto: 'Выражай себя не смотря ни на что',
    subject: 'Я',
    challenges: [
      'Ощущать, защищать и проявлять своё Я',
      'Чувствовать свою власть/силу',
      'Не испытывать страх'
    ]
  },
  {
    title: 'Синий',
    color: 'hsla(220, 50%, 50%, 0.5)',
    purpose: 'Порядок',
    motto: 'Подавляй желания ради награды в будущем',
    subject: 'Мы',
    challenges: [
      'Ощущать упорядоченность мира',
      'Быть правильным',
      'Идентифицировать себя с ролью в группе'
    ]
  },
  {
    title: 'Оранжевый',
    color: 'hsla(25, 60%, 50%, 0.5)',
    purpose: 'Познание',
    motto: 'Выражай себя разумным способом',
    subject: 'Я',
    challenges: [
      'Познать истину',
      'Быть автором своей жизни',
      'Собрать целостную картину мира'
    ]
  },
  {
    title: 'Зеленый',
    color: 'hsla(100, 50%, 50%, 0.5)',
    purpose: 'Согласие',
    motto: 'Подавляй желания ради награды сейчас',
    subject: 'Мы',
    challenges: [
      'Найти смысл вне себя',
      'Быть частью большего целого',
      'Чувствовать связность с миром'
    ]
  },
  {
    title: 'Желтый',
    color: 'hsla(50, 80%, 50%, 0.5)',
    purpose: 'Творчество',
    motto: 'Выражай себя, но никогда за счет других и так, чтобы от этого выигрывали все живые существа',
    subject: 'Я',
    challenges: [
      'Воплощать самим собой внутреннюю свободу',
      'Трудиться во благо не ожидая награды',
      'Быть с другими, но не зависеть от них'
    ]
  },
  {
    title: 'Бирюзовый',
    color: 'hsla(175, 50%, 50%, 0.5)',
    purpose: 'Гармония',
    motto: 'Подавляй желания ради баланса в мире',
    subject: 'Мы',
    challenges: [
      'Гармонизировать общество',
      'Соединяться с другими на глубинном уровне',
      'Настраивать глобальные сети взаимосвязей'
    ]
  },
]

</script>

<style scoped>
</style>