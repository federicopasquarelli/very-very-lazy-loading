export default `
<template>
  <div v-is-intersecting.instant="spin" class="flex spinner-wrapper">
    <div class="spinner">
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Spinner",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    spin() {
      this.$emit("is-loading");
    }
  }
});
</script>
`