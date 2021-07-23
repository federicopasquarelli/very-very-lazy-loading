import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import IsIntersecting from "vue-is-intersecting";
import routes from "@/routes";
import hljs from "highlight.js";
import xml from "highlight.js/lib/languages/xml";
import { store } from "@/store";
import "@/scss/main.scss";

hljs.registerLanguage("xml", xml);
Vue.use(hljs.vuePlugin);
Vue.use(VueRouter);
Vue.use(IsIntersecting);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("setReset");
  next();
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
