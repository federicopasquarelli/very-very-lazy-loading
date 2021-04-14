<template>
  <div>
    <div class="title">
      <h1>About Me</h1>
    </div>
    <div class="text-container">
      <div class="text-center">
        <p>
          One day I had the need of having the images on my website
          lazyloaded.<br />
          I tried to search for something that was fitting to my needs and I
          couldn't really find anything that i liked,<br />
          so I just decided to have fun and make my own plugin (ongoing for the
          moment, the code can still be improved a lot!).<br />
          This directive is an intersection observer that triggers one or
          multiple method inside of the component based on the intersection that
          the binding element has with the viewport.<br />
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
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About"
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
