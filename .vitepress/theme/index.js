import '@unocss/reset/tailwind.css'
import 'uno.css'

import { MotionPlugin } from "@vueuse/motion";

import "./styles/vars.css";
// import "./styles/layout.postcss";
// import "./styles/custom-blocks.css";
// import "./styles/sidebar-links.postcss";
// import "./styles/transitions.css";

import DefaultTheme from 'vitepress/theme'

const theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin);
  },
};

export default theme;
