const Images = () =>
  import(/* webpackChunkName: "images" */ "@/views/Images.vue");
const Backgrounds = () =>
  import(/* webpackChunkName: "backgrounds" */ "@/views/Backgrounds.vue");
const Opacity = () =>
  import(/* webpackChunkName: "opacity" */ "@/views/Opacity.vue");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About.vue");
const Instant = () =>
  import(/* webpackChunkName: "instant" */ "@/views/Instant.vue");
const Basic = () => import(/* webpackChunkName: "basic" */ "@/views/Basic.vue");
const IframeView = () =>
  import(/* webpackChunkName: "iframe-view" */ "@/views/Iframe.vue");

export default [
  { path: "/", component: Images },
  { path: "/backgrounds", component: Backgrounds },
  { path: "/opacity", component: Opacity },
  { path: "/about", component: About },
  { path: "/instant", component: Instant },
  { path: "/basic", component: Basic },
  { path: "/iframe", component: IframeView }
];
