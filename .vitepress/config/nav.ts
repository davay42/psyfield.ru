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
      { text: 'Психотипическая адаптация личности', link: '/cards/types/'},
      { text: 'Транзактный анализ', link: '/cards/transact/'},
      { text: 'Позитивная психология', link: '/cards/positive/'},
      { text: 'Нейролингвистическое программирование', link: '/cards/nlp/'},
      { text: 'Спиральная динамика', link: '/cards/spiral/'},
      { text: 'Интегральный подход', link: '/cards/integral/'},
      { text: 'Адаптационная теория эмоций', link: '/cards/adaptive/'},
      { text: 'Психоалхимия', link: '/cards/alchemy/'},
    ],
  },
  {
    text: 'Конспекты',
    items: [
      { text: 'Транзактный анализ', link: '/synopsis/transact/'},
      { text: 'Позитивная психология', link: '/synopsis/positive/'},
      { text: 'Нейролингвистическое программирование', link: '/synopsis/nlp/'},
      { text: 'Интегральный подход', link: '/cards/integral/'},
      { text: 'Адаптационная теория эмоций', link: '/synopsis/adaptive/'},
    ],
  },
]
