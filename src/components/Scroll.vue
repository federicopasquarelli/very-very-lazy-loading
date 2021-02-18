<template>
  <div class="scroll">
    <button class="btn" @click="scrollUp">Up</button>
    <button class="btn" @click="scrollDOwn">Down</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Scroll",
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollDOwn() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scroll {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>
