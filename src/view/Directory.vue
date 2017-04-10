<template>
  <!--目录-->
  <div class="directory-wrap container-wrap">
    <search style="position: relative; top: 0;"></search>
    <div class="directory-content">
      <group>
        <cell
          title="JAVASCRIPT"
          is-link
          :border-intent="false"
          :arrow-direction="showContent004 ? 'up' : 'down'"
          @click.native="showContent004 = !showContent004"></cell>
        <p class="slide" :class="showContent004?'animate':''">
            <cell title="1月" value="js"></cell>
            <cell title="2月" value="js"></cell>
        </p>
        <cell
          title="JAVASCRIPT"
          is-link
          :border-intent="false"
          :arrow-direction="showContent004 ? 'up' : 'down'"
          @click.native="showContent004 = !showContent004"></cell>
        <p class="slide" :class="showContent004?'animate':''">
          <cell title="1月" value="js"></cell>
          <cell title="2月" value="js"></cell>
        </p>
      </group>
    </div>
  </div>
  <!--/目录-->
</template>
<script>
  import directory from '../assets/js/directory.js'
  export default directory
</script>
<style lang="scss">
  .weui-search-bar__label{
    line-height: 22px;
  }
  .weui-search-bar__cancel-btn{
    color: #669999 !important;
  }
  .directory-content{
    margin: 0 10px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  }
  .slide {
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
