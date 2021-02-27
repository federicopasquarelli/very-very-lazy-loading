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
    <spinner :show="loader" @is-loading="fetchBlocks"></spinner>
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
      ready: false
    };
  },
  components: {
    Spinner
  },
  methods: {
    fetchBlocks() {
      this.loader = true;
      setTimeout(() => {
        this.blocks.push(...Array(100).fill({ visible: false }));
        this.loader = false;
      }, 1000);
    },
    loadBackground(e: HTMLElement) {
      e.classList.add("zoom-in");
    },
    unloadBackground(e: HTMLElement) {
      e.classList.remove("zoom-in");
    }
  }
});
</script>
`;
