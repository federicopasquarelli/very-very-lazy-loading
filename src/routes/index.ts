const Images = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "images" */ "@/views/Images.vue"
  );
const Backgrounds = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "backgrounds" */ "@/views/Backgrounds.vue"
  );
const Opacity = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "opacity" */ "@/views/Opacity.vue"
  );
const About = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "about" */ "@/views/About.vue"
  );
const Instant = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "instant" */ "@/views/Instant.vue"
  );
const Basic = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "basic" */ "@/views/Basic.vue"
  );
const IframeView = () =>
  import(
    /* webpackPreload: true */
    /* webpackChunkName: "iframe-view" */ "@/views/Iframe.vue"
  );

export default [
  { path: "/", component: Images },
  { path: "/backgrounds", component: Backgrounds },
  { path: "/opacity", component: Opacity },
  { path: "/about", component: About },
  { path: "/instant", component: Instant },
  { path: "/basic", component: Basic },
  { path: "/iframe", component: IframeView },
];
