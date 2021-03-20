import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Поле',
    items: [
      { text: 'Приветствие', link: '/field/' },
      { text: 'Направления', link: '/field/areas' },
    ],
  },
  {
    text: 'Конспекты',
    items: [
      { text: 'Транзактный анализ', link: '/synopsis/transact/' },
    ],
  },
]
