import '@unocss/reset/tailwind.css'
import 'uno.css'

import { MotionPlugin } from "@vueuse/motion";

// import "./styles/vars.css";
// import "./styles/layout.postcss";
// import "./styles/custom-blocks.css";
// import "./styles/sidebar-links.postcss";
// import "./styles/transitions.css";

// import Layout from "./layout.vue";
// import NotFound from "./not-found.vue";

import TimeAgo from "javascript-time-ago";
import ru from "javascript-time-ago/locale/ru";

import DefaultTheme from 'vitepress/theme'

TimeAgo.addDefaultLocale(ru);

const theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin);
  },
};

export default theme;
