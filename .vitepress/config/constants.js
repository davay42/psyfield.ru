const isProd = process.env.NODE_ENV === "production";

const site = isProd ? "https://www.psyfield.ru" : "http://localhost:3000";

export const metaData = {
  title: "Психологическое поле",
  description: "Открытое собрание карт сознания",
  site,
  locale: "ru-RU",
  image: `${site}/assets/s-exp.svg`,
  icon: "/assets/s-exp.svg",
  author: "Денис Старов",
  tags: "психология, психотипы, этапы развития, теории, карточки, конспекты, учения, схемы",
};
