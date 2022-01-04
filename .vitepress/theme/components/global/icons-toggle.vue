<template lang="pug">
.p-2.cursor-pointer.underline(@click="icons = !icons")
  span.font-bold(v-if="icons") Выключить 
  span.font-bold(v-else) Включить 
  span иконки
</template>

<script setup>
import { useStorage } from '@vueuse/core'

const icons = useStorage('show-icons', true);
</script>
