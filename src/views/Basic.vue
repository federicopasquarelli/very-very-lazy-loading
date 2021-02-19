<template>
  <div>
    <div class="title">
      <h1>background image lazy loading</h1>
    </div>
    <div class="container" v-if="ready">
      <div v-for="index in images" :key="index" class="cover">
        <div class="full bg-red" v-is-intersecting="loadBackground"></div>
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
  name: "Basics",
  components: {
    Spinner,
  },
  data() {
    return {
      images: 100,
      ready: false,
      loader: false,
    };
  },
  methods: {
    fetchImages() {
      this.loader = true;
      setTimeout(() => {
        this.images = this.images + 100;
        this.loader = false;
        if (!this.ready) this.ready = true;
      }, 500);
    },
    loadBackground(e: HTMLElement) {
      if (e.style.backgroundColor != "green") {
        e.style.backgroundColor = "green";
      } else {
        e.style.backgroundColor = "red";
      }
    },
  },
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
.bg-red {
  background-color: red;
}
</style>
