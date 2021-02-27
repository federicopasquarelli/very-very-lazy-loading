import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { isIntersecting } from "@/directives/isintersecting.ts";
import { randomcolor } from "@/directives/randomcolor.ts";
import routes from "@/routes";
import hljs from "highlight.js";
import { store } from "@/store";
import "@/scss/main.scss";
Vue.use(hljs.vuePlugin);
Vue.use(VueRouter);
Vue.directive("is-intersecting", isIntersecting);
Vue.directive("random-color", randomcolor);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
