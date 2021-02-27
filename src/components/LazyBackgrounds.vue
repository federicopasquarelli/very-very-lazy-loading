<template>
  <div>
    <div class="grid-container" v-if="getReady">
      <div
        v-for="(image, index) in getImages"
        :key="image.id"
        class="cover"
      >
        <div
          :id="`image-${index}`"
          class="full bg-cover"
          :style="`background-image: url(${image.previewURL})`"
          v-is-intersecting:[image.webformatURL].unique="loadBackground"
        ></div>
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
  name: "LazyBackgrounds",
  components: {
    Spinner
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadBackground(e: HTMLElement, callback: string) {
      e.style.backgroundImage = `url(${callback})`;
    }
  },
  computed: {
    ...mapGetters(["getImages", "getReady", "getLoader"])
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
