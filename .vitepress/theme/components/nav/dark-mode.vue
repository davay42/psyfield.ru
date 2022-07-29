<template lang="pug">
button.icon-button(@click="toggle()")
  carbon-moon(v-show="isDark")
  ion-ios-sunny(v-show="!isDark")
</template>

<script setup lang='ts'>
import { useToggle } from '@vueuse/core'
import { isDark } from '../../composables/dark.js'

const toggle = useToggle(isDark);
</script>
