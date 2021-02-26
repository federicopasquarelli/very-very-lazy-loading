<template>
  <div>
    <div class="title">
      <h1>background image lazy loading</h1>
    </div>
    <lazy-backgrounds></lazy-backgrounds>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LazyBackgrounds from "@/components/LazyBackgrounds.vue";

export default Vue.extend({
  name: "Backgrounds",
  components: {
    LazyBackgrounds,
  },
});
</script>

<style lang="scss" scoped></style>
