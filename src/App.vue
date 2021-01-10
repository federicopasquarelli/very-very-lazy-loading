<template>
  <div id="app" v-random-color.bg.text>
    <div class="title">
      <h1 style="filter: invert(1)">image lazy loading</h1>
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
      ready: false
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
        .then(response => response.json())
        .then(response => {
          this.images = response.hits;
          this.ready = true;
        })
        .catch(err => console.log(err));
    }
  }
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
  max-width: 903px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
