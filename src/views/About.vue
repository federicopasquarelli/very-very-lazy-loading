<template>
  <div>
    <div class="title">
      <h1>About Me</h1>
    </div>
    <div class="text-container">
      <div class="text-center">
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
