<template>
  <div class="main-content">
    <div class="title">
      <h1>custom callback lazy loading</h1>
    </div>
    <snippet :code="code" />
    <snippet :code="spinner" />
    <zoom />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Snippet from "@/components/Snippet.vue";
import codesnippet from "@/docs/snippets/basic";
import spinnersnippet from "@/docs/snippets/spinner";
import Zoom from "@/components/Zoom.vue";

export default Vue.extend({
  name: "Basics",
  components: {
    Snippet,
    Zoom
  },
  data() {
    return {
      code: codesnippet,
      spinner: spinnersnippet
    };
  }
});
</script>
