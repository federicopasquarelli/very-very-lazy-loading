export default `
<template>
  <div>
    <div class="grid-container">
      <div v-for="(block, index) in blocks" :key="index" class="cover">
        <div
          class="full"
          v-is-intersecting:[index].current="[loadBackground, unloadBackground]"
        ></div>
      </div>
    </div>
    <div v-is-intersecting.instant="fetchImages" class="flex">
      <br />
      <spinner v-if="loader"></spinner>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";

export default Vue.extend({
  data() {
    return {
      blocks: Array(100).fill({ visible: false }),
      loader: false,
      ready: false,
    };
  },
  components: {
    Spinner,
  },
  methods: {
    fetchImages() {
      this.loader = true;
      setTimeout(() => {
        this.blocks.push(...Array(100).fill({ visible: false }));
        this.loader = false;
      }, 500);
    },
    loadBackground(e: HTMLElement) {
      e.classList.add("zoom-in");
    },
    unloadBackground(e: HTMLElement) {
      e.classList.remove("zoom-in");
    },
  },
});
</script>
`;
