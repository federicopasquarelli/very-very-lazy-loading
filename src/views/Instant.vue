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
        intersecting, when the user scroll fast it can cause many triggers
        together
      </p>
    </div>
    <div class="container" v-if="ready">
      <div
        v-for="(image, index) in images"
        :key="image.id * Date.now()"
        class="cover"
      >
        <img
          :id="'image-' + index"
          :src="image.previewURL"
          v-is-intersecting:[image.largeImageURL].unique.instant="loadImage"
        />
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
  name: "Instant",
  components: {
    Spinner,
  },
  data() {
    return {
      images: [] as any[],
      ready: false,
      page: 0,
      loader: false,
    };
  },
  methods: {
    async fetchImages() {
      this.page++;
      this.loader = true;
      await fetch(
        `https://pixabay.com/api/?key=${process.env.VUE_APP_NOT_SECRET_CODE}&per_page=200&page=${this.page}&image_type=photo`
      )
        .then((response) => response.json())
        .then((response) => {
          this.images = [...this.images, ...response.hits];
          if (!this.ready) this.ready = true;
        })
        .catch((err) => console.log(err));
    },
    loadImage(e: HTMLImageElement, callback: string) {
      e.setAttribute("src", callback);
    },
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
