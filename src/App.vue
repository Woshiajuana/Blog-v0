<template>
  <div id="app">

    <!--loading页面-->
    <loading v-show="!isLoading"></loading>
    <!--/loading页面-->

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

  import MyHeader from './components/My-Header.vue'       /**引入头部*/
  import MyNav from './components/My-Nav.vue'             /**引入导航条*/
  import SvgTemplate from './components/Svg.vue'          /**引入svg图标*/
  import Loading from  './components/Loading.vue'               /**引入loading页面*/

  export default {
    name: 'app',
    computed: {
      animateName () {
          return this.$store.state.animate_name;
      },
      isLoading () {
          return this.$store.state.is_loading;
      }
    },
    components: {
      Loading,
      MyHeader,
      MyNav,
      SvgTemplate
    }
  }

</script>
<style lang="scss">
  @import "assets/scss/app.scss";
</style>
