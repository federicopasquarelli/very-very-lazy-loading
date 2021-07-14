<template>
  <div class="container-fluid flex-grow">
    <div class="row">
      <div class="col-3 border-right">
        <div class="d-flex flex-column">
          <ul>
            <li><a href="">First link</a></li>
            <li><a href="">Second Link</a></li>
            <li><a href="">terzo link</a></li>
            <li><a href="">quarto link</a></li>
            <li><a href="">quinto link</a></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="title">
          <h1>custom css property</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Opacity",
});
</script>

<style lang="scss" scoped>
$color-primary: #eae7dc;

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transition: 0.5s;
  filter: invert(100%);
}
.border-right {
  border-right: 1px solid $color-primary;
}
</style>
