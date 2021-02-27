const Images = () => import("@/views/Images.vue");
const Backgrounds = () => import("@/views/Backgrounds.vue");
const Opacity = () => import("@/views/Opacity.vue");
const About = () => import("@/views/About.vue");
const Instant = () => import("@/views/Instant.vue");
const Basic = () => import("@/views/Basic.vue");

export default [
  { path: "/", component: Images },
  { path: "/backgrounds", component: Backgrounds },
  { path: "/opacity", component: Opacity },
  { path: "/about", component: About },
  { path: "/instant", component: Instant },
  { path: "/basic", component: Basic }
];
