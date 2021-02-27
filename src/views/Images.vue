<template>
  <div class="main-content">
    <div class="title">
      <h1>image lazy loading</h1>
    </div>
    <h3>Component usage</h3>
    <snippet :code="code" />
    <snippet :code="spinner" />
    <lazy-images></lazy-images>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LazyImages from "@/components/LazyImages.vue";
import codesnippet from "@/docs/snippets/images.ts";
import spinnersnippet from "@/docs/snippets/spinner.ts";
import Snippet from "@/components/Snippet.vue";

export default Vue.extend({
  name: "Images",
  components: {
    LazyImages,
    Snippet,
  },
  data() {
    return {
      code: codesnippet,
      spinner: spinnersnippet,
    };
  },
});
</script>
