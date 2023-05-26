<script setup>
import JSZip from 'jszip'
import DefenseCard from './DefenseCard.vue';

const props = defineProps({
	defenses: Object
})


function getSVG(pic) {
	var svg = document.getElementById(pic);
	if (!svg) return
	const serializer = new XMLSerializer();
	let source = serializer.serializeToString(svg);
	source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
	return source
}


async function saveAll() {
	const zip = new JSZip();
	for (let level in props.defenses) {
		for (let title in props.defenses[level]) {
			const svg = getSVG(`${title}`)
			zip.file(`${level}/${title}.svg`, svg, "image/svg");
		}
	}
	const blob = await zip.generateAsync({
		type: "blob",
		comment: `Сгенерировано на сайте https://psyfield.ru`,
		compression: "DEFLATE",
		compressionOptions: {
			level: 9,
		},
	});


	downloadFile(blob, "application/zip", `defenses.zip`);
	return true;
}


function downloadFile(text, fileType, fileName, isBlob = true) {
	const a = document.createElement("a");
	a.download = fileName;

	if (isBlob) {
		a.href = URL.createObjectURL(new Blob([text], { type: fileType }));
		setTimeout(function () {
			URL.revokeObjectURL(a.href);
		}, 1500);
	} else {
		a.href = `data:${fileType};,${text}`;
	}
	a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
	a.style.display = "none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

</script>

<template lang='pug'>
.flex.flex-col
	.p-0(v-for="(defs, level) in defenses" :key="level") 
		h4.text-3xl.my-8.p-4 {{level}}
		.flex.flex-wrap.gap-8
			DefenseCard(v-for="(def, d) in defs" :key="d" :level="level" :def="def" :d="d")

	.flex.gap-2.mt-12
		a.flex.gap-2.items-center.text-current.p-2.m-2.bg-light-600.dark_bg-dark-50.rounded-xl.shadow-xl.cursor-pointer(
			href="https://github.com/davay42/psyfield.ru/tree/master/cards/defense/game"
			target="_blank"
			)
			la-github.text-2xl
			.text-lg Исходный код
		.flex.gap-2.items-center.text-current.p-2.m-2.bg-light-600.dark_bg-dark-50.rounded-xl.shadow-xl.cursor-pointer(@click="saveAll()")
			la-save.text-2xl
			.text-lg Скачать

	details.mt-8
		summary.cursor-pointer Только текст
		div(v-for="(list,mode) in defenses", :key="mode")
			h2 {{mode}}
			p(v-for="(defense, title) in list", :key="defense")
				h3 {{title}}
				span {{defense.t}}
				blockquote
					b {{defense.q}}

</template>