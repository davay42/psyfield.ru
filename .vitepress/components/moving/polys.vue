<template lang="pug">
canvas.cursor-pointer.w-sm.h-md(class="md:w-xl md:h-xl",ref="canvas", data-paper-resize="true", @click="toss()")
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
  setPolys()

});

const polys = []


function setPolys() {
  const layer = new paper.Layer({
    name: 'poly'
  })

  for (let i = 0; i < 7; i++) {
    let poly = new paper.Path.RegularPolygon({
      order: i,
      applyMatrix: false,
      sides: i + 3,
      rotation: Math.random() * 180,
      blendMode: 'lighten',
      center: [Math.random() * w / 2 + w / 4, Math.random() * h / 2 + h / 4],
      radius: Math.random() * w / 6,
      strokeWidth: 2,
      fillColor: {
        hue: (5 - i) * (360 / 5),
        saturation: 0.6,
        lightness: 0.5,
        alpha: 1,
      },
    })

    poly.on('frame', () => {
      let sign = i % 2 - 0.5
      poly.rotate(0.01 * (i + 3) * sign)
    })

    polys.push(poly)
  }

}

function toss() {
  polys.forEach((poly, i) => {
    let index = Math.random() * polys.length
    poly.tween({
      position: {
        x: Math.random() * w / 2 + w / 4,
        y: Math.random() * h / 2 + h / 4,
      },
      'rotation': Math.random() * 180,
      'bounds.size': Math.random() * w / 3 + 20,
      'fillColor.hue': (index + i) * (360 / polys.length)
    }, {
      duration: 1000,
      easing: 'easeInOutQuad',
    })
  })
}


</script>
