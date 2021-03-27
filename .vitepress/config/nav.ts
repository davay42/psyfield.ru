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
    text: 'Карточки',
    items: [
      { text: 'Психотипы', link: '/cards/types/' },
      { text: 'Транзактный анализ', link: '/cards/transact/' },
      { text: 'НЛП', link: '/cards/nlp/' },
      { text: 'Спиральная динамика', link: '/cards/spiral/' },
      { text: 'Психоалхимия', link: '/cards/alchemy/' },
    ],
  },
  {
    text: 'Конспекты',
    items: [
      { text: 'Транзактный анализ', link: '/synopsis/transact/' },
      { text: 'НЛП', link: '/synopsis/nlp/' },
    ],
  },
]
