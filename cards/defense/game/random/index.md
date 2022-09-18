---
title: Случайная карточка
subtitle: Генератор случайных психологических защит для онлайн-игры
tags: defense-game
---

<script setup>
import { ref } from 'vue'
const num = ref(0)
function randomNum() {
  num.value = Math.random()*1
}
</script>
