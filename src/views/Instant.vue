<template>
  <div>
    <div class="title">
      <h1>
        Modifier instant
      </h1>
      <h4>
        WARNING, don't use it for loading images. useful for triggering
        mutations in the store
      </h4>
      <p>
        this Modifier triggers the callback immediately when the entry is
        intersecting, when the user scrolls fast it can cause many triggers
        together
      </p>
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
          v-is-intersecting:[image.webformatURL].unique.instant="loadImage"
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
  name: "Instant",
  components: {
    Spinner,
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadImage(e: HTMLImageElement, callback: string) {
      e.setAttribute("src", callback);
    },
  },
  computed: {
    ...mapGetters(["getImages", "getReady", "getLoader"]),
  },
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
}
</style>
