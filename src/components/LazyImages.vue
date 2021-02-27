<template>
  <div>
    <div class="grid-container" v-if="ready">
      <div
        v-for="(image, index) in images"
        :key="image.id * Date.now()"
        class="cover"
      >
        <img
          :id="'image-' + index"
          :src="image.previewURL"
          v-is-intersecting:[image.largeImageURL].unique="loadImage"
        />
      </div>
    </div>
    <div v-is-intersecting.instant="fetchImages" class="flex">
      <spinner v-if="loader"></spinner>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";

export default Vue.extend({
  name: "lazy-images",
  components: {
    Spinner
  },
  data() {
    return {
      images: [] as any[],
      ready: false,
      page: 0,
      loader: false
    };
  },
  methods: {
    async fetchImages() {
      this.page++;
      this.loader = true;
      await fetch(
        `https://pixabay.com/api/?key=${process.env.VUE_APP_NOT_SECRET_CODE}&per_page=200&page=${this.page}&image_type=photo`
      )
        .then(response => response.json())
        .then(response => {
          this.images.push(...response.hits);
          if (!this.ready) this.ready = true;
          this.loader = false;
        })
        .catch(err => console.log(err));
    },
    loadImage(e: HTMLImageElement, callback: string) {
      e.setAttribute("src", callback);
    }
  }
});
</script>
