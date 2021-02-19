import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { isIntersecting } from "@/directives/isintersecting.ts";
import { randomcolor } from "@/directives/randomcolor.ts";
import routes from "@/routes";
Vue.use(VueRouter);
Vue.directive("is-intersecting", isIntersecting);
Vue.directive("random-color", randomcolor);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
