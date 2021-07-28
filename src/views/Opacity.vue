<template>
  <div>
    <div class="title">
      <h1>custom css property</h1>
    </div>
    <div class="grid-container" v-if="getReady">
      <div v-for="(image, index) in getImages" :key="image.id" class="cover">
        <img
          :id="'image-' + index"
          :src="image.urls.thumb"
          :alt="image.alt_description"
          v-is-intersecting:[image.urls.small].unique="loadImage"
        />
      </div>
    </div>
    <spinner :show="getLoader" @is-loading="fetchImages"></spinner>
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
  opacity: 0.5;
  transition: 0.5s;
  filter: invert(100%);
}
</style>
