import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import themeConfig from './theme'

const config: UserConfig<DefaultTheme.Config> = {
  title: metaData.title,
  description: metaData.description,
  lang: 'ru-RU',
  head,
  themeConfig,
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
    }
  }
}

export default config
