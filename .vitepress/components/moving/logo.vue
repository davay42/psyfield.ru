<template lang="pug">
canvas(class="md:w-xl md:h-xl cursor-pointer w-sm h-md",ref="canvas", data-paper-resize="true", @click="toss()")
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import * as paper from 'paper'
const canvas = ref(null)
let w = 100
let h = 100
onMounted(() => {
  paper.setup(canvas.value)
  w = paper.view.bounds.width
  h = paper.view.bounds.height
  setCircles()

});

const circles = []


function setCircles() {
  const layer = new paper.Layer({
    name: 'circles'
  })

  for (let i = 0; i < 12; i++) {
    let circle = new paper.Shape.Circle({
      order: i,
      center: [w / 2, h / 2],
      radius: Math.abs(w / 2 - 60 - i * 18),
      strokeWidth: 2,
      strokeColor: {
        hue: (11 - i) * 30,
        saturation: 1,
        lightness: 0.5,
        alpha: 1,
      },

    })
    circle.on('mousemove', (ev) => {
      ev.target.tween({
        radius: Math.random() * (w / 2 - 60)
      }, {
        duration: 1000,
        easing: 'easeInOutQuad'
      })
    })
    circle.on('frame', (ev) => {
      circle.position.x = w / 2 + Math.sin(ev.time / (12 - circle.order)) * 4 * circle.order
      circle.position.y = h / 2 + Math.cos(ev.time * circle.order / 8) * 4 * circle.order
    })
    circles.push(circle)
  }

}

function toss() {
  circles.forEach(circle => {
    circle.tween({
      radius: Math.random() * (w / 2 - 60)
    }, {
      duration: 1000,
      easing: 'easeInOutQuad',
    })
  })
}


</script>

<style lang="stylus" scoped>

</style>