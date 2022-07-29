<script setup>
const props = defineProps({
  type: { type: String, default: 'primitive' },
  defense: { type: String, default: 'isolation' },
  desc: { type: String, default: '' },
  width: { type: Number, default: 300 },
  height: { type: Number, default: 300 },
})

const defenses = {
  primitive: {
    isolation: { title: "Изоляция" },
    denial: { title: "Отрицание" },
    control: { title: "Всемогущий контроль" },
    ideal: { title: "Идеализация" },
    project: { title: "Проекция" },
  }
}

</script>

<template lang='pug'>
.bg-light-200.rounded-3xl.shadow-xl.p-2.max-w-min.dark_bg-dark-50.m-2
  .m-0(:style="{ width: width + 'px', height: height + 'px' }")
    svg.h-full.rounded-3xl.overflow-hidden(viewbox="0 0 200 300")
      rect(x=0 y=0 rx="20" :width="width" :height="height" fill="#333")

      circle(key="center" :cx="width / 2" :cy="height / 2" :r="width / 8" fill="yellow")

      mask#me
        rect(width=1000 height=1000 fill="white")
        circle(key="center" :cx="width / 2" :cy="height / 2" :r="width / 8" fill="black")

      g(v-if="type == 'primitive'")

        g(v-if="defense == 'isolation'")
          circle(key="light" :cx="width / 2" :cy="height / 2 - 15" :r="width / 5" fill="#fff5")

        g(v-if="defense == 'denial'")
          circle(key="light" :cx="width / 2" :cy="height / 2 - height / 2" :r="width / 1.5" fill="#fff5" )

        g(v-if="defense == 'control'")
          path(:d="`M0 0 L ${width / 2} ${height / 2} L ${width} 0 z`" fill="#fff5")
          path(:d="`M0 ${height} L ${width / 2} ${height / 2} L ${width} ${height} z`" fill="#0005")

        g(v-if="defense == 'ideal'")
          path(:d="`M 0 ${height} L ${width / 2} 0 L ${width} ${height} z`" fill="#fff5")
          path(:d="`M ${width * 0.37} ${height / 2} L ${width / 2} ${height} L ${width * 0.63} ${height / 2} z`" fill="#0005" mask="url(#me)")

        g(v-if="defense == 'project'")
          path(:d="`M 0 ${0} L ${width / 2} ${height / 2} L ${width} ${0} z`" fill="#fff5")
          //- path(:d="`M ${width * 0.3} ${height / 2} L ${width / 2} ${height} L ${width * 0.6} ${height / 2} z`" fill="#0005" mask="url(#me)")

  .p-2.flex.flex-col.gap-2
    .text-xl.font-bold {{ defenses[type]?.[defense]?.title }}
    .text-md {{ defenses[type]?.[defense]?.desc || desc }}
</template>