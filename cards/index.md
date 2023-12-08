---
title: Карточки
list: cards
date: 2021-09-01
order: 20
---

# Карточки

Краткие, лаконичные, визуально оформленные тезисы наиболее развитых соременных моделей человека и человеческой психики.

<script setup>
  import {data} from './cards.data.js'
</script>

<page-card v-for="page in data"
 :key="page.title" v-bind="page.frontmatter" :url="page.url">{{page}}</page-card>
