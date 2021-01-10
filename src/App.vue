<template>
  <div id="app">
    <div class="container">
      <h1 class="w-full">image lazy loading</h1>
    </div>
    <div class="container" v-if="ready">
      <div v-for="image in images" :key="image.id" class="cover">
        <img
          :src="image.previewURL"
          v-lazy-bg="image.largeImageURL"
          :id="image.id"
        />
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
      images: [],
      ready: false,
    };
  },
  computed: {},
  mounted() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      await fetch(
        `https://pixabay.com/api/?key=${process.env.VUE_APP_NOT_SECRET_CODE}&per_page=200`
      )
        .then((response) => response.json())
        .then((response) => {
          this.images = response.hits;
          this.ready = true;
        })
        .catch((err) => console.log(err));
    },
  },
});
</script>

<style lang="scss">
body {
  font-family: 'Quicksand', sans-serif;
}
.w-full {
  width: 100%;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  > div {
    width: 33.33333%;
    height: 0;
    padding-bottom: 33.33333%;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 50%;
      padding-bottom: 50%;
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
  img {
    width: 100%;
  }
}
</style>
