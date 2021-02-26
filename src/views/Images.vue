<template>
  <div>
    <div class="title">
      <h1>image lazy loading</h1>
    </div>
    <lazy-images></lazy-images>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LazyImages from "@/components/LazyImages.vue";

export default Vue.extend({
  name: "Images",
  components: {
    LazyImages,
  },
});
</script>

