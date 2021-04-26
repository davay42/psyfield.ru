import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
//@ts-ignore
import getTags from 'vitepress-tags'

const pages = getTags()

const config: UserConfig<DefaultTheme.Config> = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    repo: 'davay42/psyfield.ru',
    logo: '/assets/s-exp.svg',
    docsDir: '.',
    docsBranch: 'master',
    docsRepo: 'davay42/pasyfield.ru',
    editLinks: true,
    editLinkText: 'Дополнить / исправить',
    nav: [
      {
        text: 'Поле',
        link: '/field/',
        //@ts-ignore
        items: pages.field
      },
      {
        text: 'Карточки',
        link: '/cards/',
        //@ts-ignore
        items: pages.cards
      },
      {
        text: 'Конспекты',
        link: '/synopsis/',
        //@ts-ignore
        items: pages.synopsis
      },
      {
        text: 'Авторы',
        link: '/authors',
        //@ts-ignore
        items: pages.author
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Поле',
          link: '/field/',
          //@ts-ignore
          children: pages.collab
        },
        {
          text: 'Карточки',
          link: '/cards/',
          //@ts-ignore
          children: pages.cards
        },
        {
          text: 'Конспекты',
          link: '/synopsis/',
          //@ts-ignore
          children: pages.synopsis
        },
        {
          text: 'Авторы',
          link: '/authors',
          //@ts-ignore
          children: pages.author
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'));
      md.use(require('markdown-it-container'), 'card')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost','starovdenis.com']
      })
    }
  },
  customData: {
    pages: pages
  }
}

export default config
