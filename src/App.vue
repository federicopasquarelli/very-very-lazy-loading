<template>
  <div id="app" v-random-color.bg.text>
    <div class="title">
      <h1 style="filter: invert(1)">image lazy loading</h1>
      <h1 v-is-intersecting.lazy="coseacaso">ciao</h1>
    </div>
    <div class="container" v-if="ready" style="padding-bottom: 100px">
      <div v-for="image in images" :key="image.id * Date.now()" class="cover">
        <img :src="image.previewURL" v-is-intersecting:[image.largeImageURL].unique.lazy="loadImage" />
      </div>
      <div v-is-intersecting="fetchImages">
        <h1 v-is-intersecting.lazy="coseacaso">ciao</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {},
  data() {
    return {
      images: [] as any[],
      ready: false,
      page: 0,
    };
  },
  computed: {},
  mounted() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      this.page = this.page + 1;
      console.log("fetching", this.page);
      this.images = [...this.images, ...this.images];
      if (this.images.length) return;
      await fetch(
        `https://pixabay.com/api/?key=${process.env.VUE_APP_NOT_SECRET_CODE}&per_page=200&page=${this.page}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.images = [...this.images, ...response.hits];
          if (!this.ready) this.ready = true;
        })
        .catch((err) => console.log(err));
    },
    loadImage(e: HTMLImageElement, callback: any) {
      e.setAttribute("src", callback);
    },
    coseacaso() {
      console.log("coseacaso");
    },
  },
});
</script>

<style lang="scss">
body {
  font-family: "Quicksand", sans-serif;
}
#app {
  height: 100vh;
  padding-top: 100px;
  overflow: auto;
  transition: 0.5s linear;
}
.title {
  text-align: center;
  margin-bottom: 100px;
  color: inherit;
}
.container {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1px;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  > div {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }
  h1 {
    width: 100%;
    transition: 2s linear;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
