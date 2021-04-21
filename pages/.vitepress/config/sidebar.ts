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
        { text: 'Позитивная психология', link: '/cards/positive/'},
        { text: 'Нейролингвистическое программирование', link: '/cards/nlp/'},
        { text: 'Спиральная динамика', link: '/cards/spiral/'},
        { text: 'Интегральный подход', link: '/cards/integral/'},
        { text: 'Периодизация психологического развития', link: '/cards/adult/'},
        { text: 'Адаптационная теория эмоций', link: '/cards/adaptive/'},
        { text: 'Психоалхимия', link: '/cards/alchemy/'},
      ],
    },

    {
      text: 'Конспекты',
      children: [
        { text: 'Транзактный анализ', link: '/synopsis/transact/'},
        { text: 'Позитивная психология', link: '/synopsis/positive/'},
        { text: 'Нейролингвистическое программирование', link: '/synopsis/nlp/'},
        { text: 'Периодизация психологического развития', link: '/synopsis/adult/'},
        { text: 'Интегральный подход', link: '/cards/integral/'},
        { text: 'Адаптационная теория эмоций', link: '/synopsis/adaptive/'},
      ],
    },

    {
      text: 'О проекте',
      children: [
        { text: 'Авторы', link: '/authors' },
        { text: 'Благодарность', link: '/support' },
      ],
    },
  ],
}
