<template>
  <div>
    <div class="title">
      <h1>
        Documentation
      </h1>
    </div>
    <div class="grid-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Docs",
  data() {
    return {
      images: [] as any[],
      ready: false,
      page: 0,
      loader: false
    };
  },
  methods: {}
});
</script>
