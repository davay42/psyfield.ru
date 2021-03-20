import type { DefaultTheme } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: DefaultTheme.Config = {
  repo: 'DeFUCC/psy-press',
  logo: '/assets/s-exp.svg',
  docsDir: '.',
  docsBranch: 'main',
  docsRepo: 'DeFUCC/psy-press',
  editLinks: true,
  editLinkText: 'Предложите изменения',
  nav,
  sidebar,
}

export default themeConfig
