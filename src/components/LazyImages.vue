<template>
  <div>
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
  name: "lazy-images",
  components: {
    Spinner
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadImage(e: HTMLImageElement, callback: string) {
      e.setAttribute("src", callback);
    }
  },
  computed: {
    ...mapGetters(["getImages", "getReady", "getLoader"])
  },
});
</script>
