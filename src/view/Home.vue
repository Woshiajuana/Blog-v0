<template>
  <div class="home-wrap container-wrap">
    <loading v-if="is_loading"></loading>
    <scroller v-else
              lock-x
              height="-100"
              :scrollbarY="true"
              @on-scroll="onScroll"
              :use-pulldown="true"
              :use-pullup="true"
              @on-pulldown-loading="onPullDownLoading"
              @on-pullup-loading="onPullUpLoading"
              :pulldown-config="pull_down_config"
              :pullup-config="pull_up_config"
              ref="homeScrollEvent">
      <div class="container-content">
        <a v-for="(article_item,article_index) in articleArr" class="content-item" :href="'#/details/1'+article_item.article_id">
          <span class="content-type" v-text="article_item.article_type"></span>
          <h2 class="content-item-title" v-text="article_item.article_title"></h2>
          <span class="content-time" v-text="article_item.article_time"></span>
        </a>
      </div>
    </scroller>
  </div>
</template>
<style lang="scss">
  @import "../assets/scss/home.scss";
</style>
<script>
  import home from '../assets/js/home.js'
  export default home
</script>
