import Images from "@/views/Images.vue";
import Backgrounds from "@/views/Backgrounds.vue";
import Opacity from "@/views/Opacity.vue";
import About from "@/views/About.vue";
import Instant from "@/views/Instant.vue";
import Basic from "@/views/Basic.vue";
import Page from "@/views/Page.vue";

export default [
  { path: "/", component: Images },
  { path: "/backgrounds", component: Backgrounds },
  { path: "/opacity", component: Opacity },
  { path: "/about", component: About },
  { path: "/instant", component: Page },
  { path: "/basic", component: Basic },
];
