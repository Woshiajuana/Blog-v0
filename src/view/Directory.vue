<template>
  <!--目录-->
  <div class="directory-wrap container-wrap">
    <loading v-show="isLoading"></loading>
    <transition :name="animateName">
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </transition>
  </div>
  <!--/目录-->
</template>
<script>
  import directory from '../assets/js/directory.js'
  export default directory
</script>
<style lang="scss">
  @import "../assets/scss/directory.scss";
</style>
