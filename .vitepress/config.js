import { metaData } from './config/constants.js'
import head from './config/head.js'

import mdClassy from 'markdown-it-classy'
import mdContainer from 'markdown-it-container'
import mdLinks from 'markdown-it-external-links'

import getTags from 'vitepress-tags'

const pages = getTags('./')

export default {
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
        items: pages.field,
      },
      {
        text: 'Карточки',
        link: '/cards/',
        items: pages.cards,
      },
      {
        text: 'Конспекты',
        link: '/synopsis/',
        items: pages.synopsis,
      },
      {
        text: 'Авторы',
        link: '/authors.html',
        items: pages.author,
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Поле',
          link: '/field/',
          children: pages.field,
        },
        {
          text: 'Карточки',
          link: '/cards/',
          children: pages.cards,
        },
        {
          text: 'Конспекты',
          link: '/synopsis/',
          children: pages.synopsis,
        },
        {
          text: 'Авторы',
          link: '/authors.html',
          children: pages.author,
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(mdClassy)
      md.use(mdContainer, 'card')
      md.use(mdLinks, {
        internalDomains: ['localhost', 'starovdenis.com'],
      })
    },
  },
}
