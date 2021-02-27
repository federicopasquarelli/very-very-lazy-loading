<template>
  <div id="app">
    <div class="app-wrapper">
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
            <router-link to="/instant">Instant</router-link>
          </li>
          <li>
            <router-link to="/basic">Basic</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/docs">Docs</router-link>
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
    Scroll,
  },
});
</script>

<style lang="scss">
.app-wrapper {
  min-height: 100vh;
  transition: 0.5s linear;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.navigation {
  flex-wrap: wrap;
}
.header {
  display: flex;
  justify-content: center;
  padding: 25px 0;
  flex-wrap: wrap;
  li {
    margin: 25px;
  }
  a {
    color: inherit;
  }
}
.flex {
  display: flex;
  justify-content: center;
}
.title {
  text-align: center;
  padding-bottom: 30px;
  > * {
    margin-bottom: 20px;
  }
  h1 {
    font-weight: bold;
  }
  h4 {
  }
}
.grid-container {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
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
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-content {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
