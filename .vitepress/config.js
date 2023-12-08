import { metaData } from './config/constants.js'
import head from './config/head.js'

import { generateSidebar } from 'vitepress-sidebar';

import mdContainer from 'markdown-it-container'

import { defineConfig } from 'vitepress';

export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  sitemap: {
    hostname: metaData.site
  },
  themeConfig: {
    repo: 'davay42/psyfield.ru',
    logo: '/assets/s-exp.svg',
    docsRepo: 'davay42/pasyfield.ru',
    nav: [
      {
        text: 'Поле',
        link: '/field/',
      },
      {
        text: 'Карточки',
        link: '/cards/',
      },
      {
        text: 'Конспекты',
        link: '/synopsis/',
      },
      {
        text: 'Авторы',
        link: '/authors/',
      },
    ],
    sidebar: generateSidebar({
      documentRootPath: '//',
      scanStartPath: '/',
      useTitleFromFrontmatter: true,
      includeRootIndexFile: true,
      useFolderLinkFromIndexFile: true,
      // includeFolderIndexFile: true,
      // convertSameNameSubFileToGroupIndexPage: true,
      useFolderTitleFromIndexFile: true,
      includeEmptyFolder: true,
      folderLinkNotIncludesFileName: true,
      excludeFolders: ['public', 'node_modules'],
      excludeFiles: ['README.md', 'index.md'],
      sortMenusByFrontmatterOrder: true,
      manualSortFileNameByPriority: ['/field/index.md', '/cards/index.md']
    })
  },
  markdown: {
    config: (md) => {
      md.use(mdContainer, 'card')
    },
  },
})