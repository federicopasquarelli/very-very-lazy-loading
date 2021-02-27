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
      default: false,
    },
  },
  methods: {
    spin() {
      this.$emit("is-loading");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.spinner-wrapper {
  height: 75px;
  width: 75px;
  margin: 50px auto;
}
.spinner {
  --size: 75px;
  --clr-bg: #272324;
  --clr1: #e2b4b1;
  --clr2: #e09f9a;
  --clr3: #e28882;
  --clr4: #e27169;
  --clr5: #e85a4f;
  --animation-duration: 650ms;
  position: relative;
  width: var(--size);
  height: var(--size);

  .spinner-item {
    position: absolute;
    width: var(--item-size);
    height: var(--item-size);
    top: calc(50% - var(--item-size) / 2);
    left: calc(50% - var(--item-size) / 2);
    border: 4px solid transparent;
    border-left: 4px solid var(--clr-spinner);
    border-right: 4px solid var(--clr-spinner);
    border-radius: 50%;
    animation: spinner2 var(--animation-duration) linear infinite;

    @keyframes spinner2 {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .spinner-item:nth-of-type(1) {
    --item-size: var(--size);
    --clr-spinner: var(--clr1);
    border-top: 4px solid var(--clr1);
  }

  .spinner-item:nth-of-type(2) {
    --item-size: calc(var(--size) - 15px);
    --clr-spinner: var(--clr5);
    border-bottom: 4px solid var(--clr5);
  }

  .spinner-item:nth-of-type(3) {
    --item-size: calc(var(--size) - 30px);
    --clr-spinner: var(--clr3);
    border-top: 4px solid var(--clr3);
  }
}
</style>
