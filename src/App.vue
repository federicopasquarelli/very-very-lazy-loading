<template>
  <div id="app">
    <div class="app-wrapper" v-random-color.bg.text>
      <div class="header">
        <ul class="flex navigation">
          <li>
            <router-link to="/">Images</router-link>
          </li>
          <li>
            <router-link to="/backgrounds">Backgrounds</router-link>
          </li>
          <li>
            <router-link to="/opacity">Opacity</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <scroll />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Scroll from "@/components/Scroll.vue";

export default Vue.extend({
  name: "App",
  components: {
    Scroll
  },
});
</script>

<style lang="scss">
body {
  font-family: "Quicksand", sans-serif;
}
* {
  box-sizing: border-box;
}
.app-wrapper {
  min-height: 100vh;
  transition: 0.5s linear;
}
.header {
  display: flex;
  justify-content: center;
  padding: 50px 0;
  li {
    margin: 0 25px;
  }
  a {
    color: inherit;
    filter: invert(100%);
  }
}
.flex {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  filter: invert(100%);
  text-align: center;
  padding-bottom: 50px;
}
.container {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1px;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  > div {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
