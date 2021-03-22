import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Поле',
      children: [
        { text: 'Приветствие', link: '/field/' },
        { text: 'Направления', link: '/field/areas' },
      ],
    },

    {
      text: 'Карточки',
      children: [
        { text: 'Психотипическая адаптация личности', link: '/cards/types/'},
        { text: 'Транзактный анализ', link: '/cards/transact/'},
        { text: 'Нейролингвистическое программирование', link: '/cards/nlp/'},
        { text: 'Психоалхимия', link: '/cards/alchemy/'},
      ],
    },

    {
      text: 'Конспекты',
      children: [
        { text: 'Транзактный анализ', link: '/synopsis/transact/'},
        { text: 'Нейрологические уровни', link: '/synopsis/neurolevels/'},
      ],
    },

    {
      text: 'О проекте',
      children: [
        { text: 'Контакты', link: '/contact' },
        { text: 'Поддержать', link: '/support' },
      ],
    },
  ],
}
