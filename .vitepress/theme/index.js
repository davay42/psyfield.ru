import "virtual:windi.css";

import { MotionPlugin } from "@vueuse/motion";

import "./styles/vars.css";
import "./styles/layout.postcss";
import "./styles/custom-blocks.css";
import "./styles/sidebar-links.postcss";
import "./styles/transitions.css";

import Layout from "./layout.vue";
import NotFound from "./not-found.vue";

import TimeAgo from "javascript-time-ago";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(ru);

const theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(MotionPlugin);

    if (
      process.env.NODE_ENV === "production" &&
      typeof window !== "undefined"
    ) {
      window.owa_baseUrl = "http://stats.frkt.ru/";
      window.owa_cmds = window.owa_cmds || [];
      window.owa_cmds.push(["setSiteId", "1f3745ae1fff347620e22de2a334ddc8"]);
      window.owa_cmds.push(["trackPageView"]);
      window.owa_cmds.push(["trackClicks"]);
      (function () {
        var _owa = document.createElement("script");
        _owa.type = "text/javascript";
        _owa.async = true;
        window.owa_baseUrl =
          "https:" == document.location.protocol
            ? window.owa_baseSecUrl ||
              window.owa_baseUrl.replace(/http:/, "https:")
            : window.owa_baseUrl;
        _owa.src =
          window.owa_baseUrl + "modules/base/js/owa.tracker-combined-min.js";
        var _owa_s = document.getElementsByTagName("script")[0];
        _owa_s.parentNode.insertBefore(_owa, _owa_s);
      })();
    }
  },
};

export default theme;
