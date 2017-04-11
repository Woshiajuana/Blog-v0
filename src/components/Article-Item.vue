<template>
  <a class="content-item" :href="article_url">
    <span class="content-type" v-text="article_type"></span>
    <h2 class="content-item-title" v-text="article_title"></h2>
    <span class="content-time" v-text="article_time"></span>
  </a>
</template>
<style lang="scss">
  @import "../assets/scss/_define.scss";
  .content-item{
  @extend %db;
  @extend %pr;
  @extend .animated;
  @extend .fadeIn;
    padding: 10px;
    background-color: #fff;
    margin: 10px;
    box-shadow: 0 0 2px rgba(0,0,0,.3);
  }
  .content-type{
  @extend %pa;
  @extend %cfff;
    height: 24px;
    line-height: 24px;
    padding: 0 24px 0 10px;
    top: 0;
    left: 0;
    background-color: #444;
  &:after{
   @extend %pa;
     content: '';
     width: 0;
     height: 0;
     right: 0;
     border-top: 12px solid transparent;
     border-right: 12px solid #fff;
     border-bottom: 12px solid transparent;
   }
  }
  .content-item-title{
  @extend %f14;
  @extend %c3;
    margin: 20px 0;
    text-indent: 2em;
    line-height: 1.8;
  }
  .content-time{
  @extend %pa;
  }
  .content-time{
  @extend %pa;
  @extend %c9;
    right: 10px;
    bottom: 10px;
  }
  .animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
</style>
<script>
  export default {
    props:['article_url','article_type','article_title','article_time']
  }
</script>
