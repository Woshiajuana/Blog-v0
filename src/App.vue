<template>
  <div id="app">

    <!--头部-->
    <my-header></my-header>
    <!--/头部-->

    <!--主体内容-->
    <transition :name="animateName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!--/主体内容-->

    <!--导航条-->
    <my-nav></my-nav>
    <!--/导航条-->

    <!--svg-->
    <svg-template></svg-template>
    <!--/svg-->
  </div>
</template>

<script>
  import App from './assets/js/app.js';
  export default App
</script>
<style lang="scss">
  @import "assets/scss/app.scss";
</style>
