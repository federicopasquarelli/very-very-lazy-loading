const Images = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "images" */ "@/views/Images.vue"
  );
const Backgrounds = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "backgrounds" */ "@/views/Backgrounds.vue"
  );
const Opacity = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "opacity" */ "@/views/Opacity.vue"
  );
const About = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "about" */ "@/views/About.vue"
  );
const Instant = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "instant" */ "@/views/Instant.vue"
  );
const Basic = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "basic" */ "@/views/Basic.vue"
  );
const IframeView = () =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "iframe-view" */ "@/views/Iframe.vue"
  );

export default [
  { path: "/", component: Images },
  { path: "/backgrounds", component: Backgrounds },
  { path: "/opacity", component: Opacity },
  { path: "/about", component: About },
  { path: "/instant", component: Instant },
  { path: "/basic", component: Basic },
  { path: "/iframe", component: IframeView }
];
