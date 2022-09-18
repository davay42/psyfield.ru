---
title: Карточки для отработки темы психозащит в группе
subtitle: Психозащиты - описания, иллюстрации, характерные фразы
tags: defenses
list: defense-game
--- 

Текст карточек разработан в соавторстве:
  - [Анна Старова](https://instagram.com/starovanna)
  - [Екатерина Михальская](https://instagram.com/kate.mihalska)
  - [Светлана Терновская](https://t.me/svetlana_ternovskaya)

<script setup>
import yaml from './defenses.yaml'
import DefenseCards from './DefenseCards.vue'


const {defenses} = yaml

</script>

<DefenseCards :defenses="defenses"/>
