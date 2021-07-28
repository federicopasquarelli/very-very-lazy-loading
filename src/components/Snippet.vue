<template>
  <div class="code" v-is-intersecting.unique.instant="showCode">
    <template v-if="show">
      <highlightjs language="xml" :code="code" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "highlight.js/styles/railscasts.css";
export default Vue.extend({
  name: "Snippet",
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showCode() {
      this.show = true;
    }
  }
});
</script>

<style scoped lang="scss">
.code {
  font-size: 12px;
  margin-bottom: 50px;
}
</style>
