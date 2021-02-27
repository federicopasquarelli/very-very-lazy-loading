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
    <div v-is-intersecting.instant="fetchBlocks" class="flex">
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
      }, 500);
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
<style lang="scss" scoped>
.container {
  margin-bottom: 50px;
}
.full {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  transition: 2s;
  border-radius: 50%;
  border: 5px solid #eae7dc;
  background-color: rgba(#fff, 0);
}
.bg-cover {
  background-size: cover;
}
.zoom-in {
  transform: translate(-50%, -50%) scale(1.5);
  background-color: rgba(#fff, 0.5);
}
</style>
