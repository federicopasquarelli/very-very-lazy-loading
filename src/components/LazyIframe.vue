<template>
  <div style="margin-top: 200vh">
    <div class="embed-container" v-is-intersecting="loadIframe">
      <iframe
        v-if="loaded"
        src="https://www.youtube.com/embed/RM5hQ3Qtf-8"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "lazy-iframe",
  methods: {
    ...mapActions(["fetchImages"]),
    loadImage(e: HTMLImageElement, callback: string) {
      e.setAttribute("src", callback);
    },
    loadIframe(): void {
      this.loaded = true;
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    ...mapGetters(["getImages", "getReady", "getLoader"]),
  },
});
</script>
<style lang="scss" scoped>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
