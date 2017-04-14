<template>
  <x-header
    :left-options="leftOpt"
    :title="title">
  </x-header>
</template>
<script>
  import { XHeader } from 'vux';
  export default {
    name: 'header',
    computed: {
      title () {
        return this.$store.state.title;
      },
      leftOpt () {
        return this.$store.state.left_opt;
      }
    },
    components: {
      XHeader
    }
  }
</script>
<style lang="scss">
  @import "../assets/scss/_define.scss";
  #app .vux-header{
    @extend %pa;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #669999;
  }
  .vux-header-fade-in-right-enter-active {
    -webkit-animation: a .5s;
    animation: a .5s
  }
  .vux-header-fade-in-left-enter-active {
    -webkit-animation: b .5s;
    animation: b .5s
  }
  .left-arrow:before {
    border: 1px solid #fff !important;
    border-width: 1px 0 0 1px !important;
  }
  @-webkit-keyframes a {
    0% {
      opacity: 0;
      -webkit-transform: translateX(150px);
      transform: translateX(150px)
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0)
    }
  }
  @keyframes a {
    0% {
      opacity: 0;
      -webkit-transform: translateX(150px);
      transform: translateX(150px)
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0)
    }
  }
  @-webkit-keyframes b {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-150px);
      transform: translateX(-150px)
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0)
    }
  }
</style>
