<template>
  <div>
    <div class="title">
      <h1>custom css property</h1>
    </div>
    <div class="grid-container" v-if="getReady">
      <div
        v-for="(image, index) in getImages"
        :key="image.id * Date.now()"
        class="cover"
      >
        <img
          :id="'image-' + index"
          :src="image.previewURL"
          v-is-intersecting:[image.webformatURL].unique="loadImage"
        />
      </div>
    </div>
    <div v-is-intersecting.instant="fetchImages" class="flex">
      <spinner v-if="getLoader"></spinner>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "Opacity",
  components: {
    Spinner
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadImage(e: HTMLImageElement, callback: string) {
      e.setAttribute("src", callback);
      e.style.opacity = "1";
      e.style.filter = "invert(0%)";
    }
  },
  computed: {
    ...mapGetters(["getImages", "getReady", "getLoader"])
  }
});
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transition: 0.5s;
  filter: invert(100%);
}
</style>
