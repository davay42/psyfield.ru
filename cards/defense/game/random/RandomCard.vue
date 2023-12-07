<script setup>
import DefenseCard from '../DefenseCard.vue'
import all from '../defenses.yaml'
import { ref, computed } from 'vue'
import { useRefHistory } from '@vueuse/core'

const { defenses } = all

const arr = Object.values(defenses)

const list = { ...arr[0], ...arr[1] }

const count = Object.keys(list).length

const num = ref(Math.floor(Math.random() * count))
const { history, undo, redo, canUndo, canRedo } = useRefHistory(num)

function randomNum() {
	let n = num.value
	while (n == num.value) {
		num.value = Math.floor(Math.random() * count)
	}
}


const d = computed(() => Object.keys(list)[num.value])
const defense = computed(() => list[d.value])
const level = computed(() => arr[0][d.value] ? 'Примитивные' : 'Вторичные')


</script>
	
	

<template lang='pug'>
button.p-4.bg-light-800.dark-bg-dark-800.rounded-xl.shadow-xl.m-4(v-on:click="randomNum()") Вытянуть карту
transition(name="fade", mode="out-in")
	DefenseCard(:d="d", :def="defense", :level="level", :key="d")
ul.pl-0.mt-16.flex.flex-col.gap-1
	transition-group(name="list")
		li.flex.gap-2(v-for="rec in history" :key="rec")
			.flex-0.w-8.text-right {{rec.snapshot}}. 
			b.flex-auto.cursor-pointer {{Object.keys(list)[rec.snapshot]}}
			i {{new Date(rec.timestamp).toLocaleString('ru-RU')}}
</template>
