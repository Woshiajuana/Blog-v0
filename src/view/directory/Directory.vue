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
  import Loading from '../../components/Loading.vue'
  export default {
    components: {
      Loading
    },
    computed: {
      animateName () {
        return this.$store.state.animate_name;
      },
      isLoading () {
        return this.$store.state.directory.is_loading;
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/_define.scss";
  .weui-search-bar__label{
    line-height: 22px;
  }
  .weui-search-bar__cancel-btn{
    color: #669999 !important;
  }
  .directory-wrap{
  @extend %oh;
  }
  .directory-content{
  @extend %pa;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  .weui-cell{
    background-color: #fff;
  @extend %c699;
  }
  }
  .slide {
  @extend %oh;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
