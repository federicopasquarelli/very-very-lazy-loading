<template>
  <div>
    <div class="title">
      <h1>background image lazy loading</h1>
    </div>
    <div class="container" v-if="ready">
      <div
        v-for="(image, index) in images"
        :key="image.id * Date.now()"
        class="cover"
      >
        <div
          :id="`image-${index}`"
          class="full bg-cover"
          :style="`background-image: url(${image.previewURL})`"
          v-is-intersecting:[image.largeImageURL].unique="loadBackground"
        ></div>
      </div>
    </div>
    <div
      v-is-intersecting.instant="fetchImages"
      class="flex"
      style="filter: invert(1)"
    >
      <spinner v-if="loader"></spinner>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";

export default Vue.extend({
  name: "Backgrounds",
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
          this.images = [...this.images, ...response.hits];
          if (!this.ready) this.ready = true;
          this.loader = false;
        })
        .catch(err => console.log(err));
    },
    loadBackground(e: HTMLElement, callback: string) {
      e.style.backgroundImage = `url(${callback})`;
    }
  }
});
</script>

<style lang="scss" scoped>
.full {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.bg-cover {
  background-size: cover;
}
</style>
