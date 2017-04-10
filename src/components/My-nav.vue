<template>
  <tabbar>
    <tabbar-item v-bind:selected="navActive == 1" link="/">
      <svg slot="icon" class="icon-svg icon-home">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-home"></use>
      </svg>
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item :selected="navActive == 2" link="directory">
      <svg slot="icon" class="icon-svg icon-dir">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dir"></use>
      </svg>
      <span slot="label">Directory</span>
    </tabbar-item>
    <tabbar-item :selected="navActive == 3" show-dot link="donate">
      <svg slot="icon" class="icon-svg icon-don">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-don"></use>
      </svg>
      <span slot="label">Donate</span>
    </tabbar-item>
  </tabbar>
</template>
<style lang="scss">
  @import "../assets/scss/_nav.scss";
</style>
<script>
  import Nav from '../assets/js/nav.js';
  export default Nav;
</script>
