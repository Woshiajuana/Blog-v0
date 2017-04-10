<template>
  <x-header :left-options="left_opt" :title="title"></x-header>
</template>
<script>
  import header from '../assets/js/header.js';
  export default header
</script>
<style>
  #app .vux-header{
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
    background-color: #669999;
  }
</style>
