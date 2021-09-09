import { metaData } from './constants.js'
import head from './head.js'

import getTags from 'vitepress-tags'

const pages = getTags()

const config = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    repo: 'davay42/psyfield.ru',
    logo: '/assets/s-exp.svg',
    pages,
    docsRepo: 'davay42/pasyfield.ru',
    nav: [
      {
        text: 'Поле',
        link: '/field/',
        //@ts-ignore
        items: pages.field,
      },
      {
        text: 'Карточки',
        link: '/cards/',
        //@ts-ignore
        items: pages.cards,
      },
      {
        text: 'Конспекты',
        link: '/synopsis/',
        //@ts-ignore
        items: pages.synopsis,
      },
      {
        text: 'Авторы',
        link: '/authors.html',
        //@ts-ignore
        items: pages.author,
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Поле',
          link: '/field/',
          //@ts-ignore
          children: pages.collab,
        },
        {
          text: 'Карточки',
          link: '/cards/',
          //@ts-ignore
          children: pages.cards,
        },
        {
          text: 'Конспекты',
          link: '/synopsis/',
          //@ts-ignore
          children: pages.synopsis,
        },
        {
          text: 'Авторы',
          link: '/authors.html',
          //@ts-ignore
          children: pages.author,
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
      md.use(require('markdown-it-container'), 'card')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost', 'starovdenis.com'],
      })
    },
  },
}

export default config
