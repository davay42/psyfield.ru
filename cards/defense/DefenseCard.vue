<script setup>
const props = defineProps({
  type: { type: String, default: 'primitive' },
  defense: { type: String, default: 'isolation' },
})

const defenses = {
  primitive: ['isolation']
}

const width = ref(200)
const height = ref(300)

</script>

<template lang='pug'>
svg.w-200px.h-300px.rounded-3xl.shadow-xl.m-2(viewbox="0 0 200 300")
  rect(x=0 y=0 rx="20" :width="width" :height="height" fill="#333")
  g(v-if="type == 'primitive'")
    g(v-if="defense == 'isolation'")
      circle(:cx="width / 2" :cy="height / 2" :r="width / 5" fill="yellow")
      circle(:cx="width / 2" :cy="height / 2 + 15" :r="width / 3" fill="yellow" opacity="0.3")
</template>