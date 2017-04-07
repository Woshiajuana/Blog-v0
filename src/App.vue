<template>
  <div id="app">
    <!--头部-->
    <my-header></my-header>
    <!--/头部-->

    <!--主体内容-->
    <router-view></router-view>
    <!--/主体内容-->

    <!--导航条-->
    <my-nav></my-nav>
    <!--/导航条-->
  </div>
</template>

<script>
  import App from './assets/js/app.js';
  export default App
</script>
<style lang="scss">
  @import "assets/scss/_common.scss";
</style>
