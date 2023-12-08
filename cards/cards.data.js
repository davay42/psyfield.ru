import { createContentLoader } from 'vitepress'



const pages = createContentLoader('./cards/**/[!/[]*/index.md', {

})

export default pages

// import fs from 'fs'

// const list = (await pages.load()).filter(el => el.url.includes('dev')).map(el => {
//   return {
//     ...el.frontmatter,
//     content: el.src,
//     cover: ''
//   }
// })

// fs.writeFileSync('./dev.json', JSON.stringify(list))