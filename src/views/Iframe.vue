<template>
  <div class="main-content">
    <div class="title">
      <h1>custom callback lazy loading</h1>
      <p>Scroll down to see a lazyloaded Youtube iframe</p>
    </div>
    <lazy-iframe></lazy-iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LazyIframe from "@/components/LazyIframe.vue";

export default Vue.extend({
  name: "IframeView",
  components: {
    LazyIframe
  }
});
</script>
