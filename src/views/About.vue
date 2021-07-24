<template>
  <div>
    <div class="title">
      <h1>About Me</h1>
    </div>
    <div class="text-container">
      <div class="text-center">
        <p>
          This directive is an intersection observer that triggers one or
          multiple methods inside of the component based on the intersection
          that the binding element has with the viewport.<br />
          It can be instant, so the callback is triggered immediately after the
          element cross the viewport, or lazy, so the callback triggers after a
          certain time that the user stop the scroll (useful in case you want to
          load a long list of images).
        </p>
        <a
          href="https://github.com/federicopasquarelli/very-very-lazy-loading"
          title="visit my github"
          target="_blank"
          >Visit My Github</a
        ><br /><br />
        <a
          href="https://www.npmjs.com/package/vue-is-intersecting"
          title="install the official plugin"
          target="blank"
          >Use this plugin</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
});
</script>
<style lang="scss" scoped>
a {
  color: inherit;
  &:hover,
  &:active {
    color: inherit;
  }
}
.text-container {
  max-width: 800px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
</style>
