<template>
  <div>
    <div class="grid-container" v-if="getReady">
      <div v-for="image in getImages" :key="image.id" class="cover">
        <img
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
  name: "lazy-images",
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
