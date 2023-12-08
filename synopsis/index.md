---
title: Конспекты
description: Ключевые пункты и обзор различных систематизаций психики
list: synopsis
date: 2021-08-01
order: 30
---

# Конспекты

Обзор положений различных психологических систематизаций

<script setup>
  import {data} from './synopsis.data.js'
</script>

<page-card v-for="page in data"
 :key="page.title" v-bind="page.frontmatter" :url="page.url">{{page}}</page-card>
