<template>
  <x-header
    :left-options="leftOpt"
    :title="title">
  </x-header>
</template>
<script>
  import header from '../assets/js/header.js';
  export default header
</script>
<style lang="scss">
  #app .vux-header{
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
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
