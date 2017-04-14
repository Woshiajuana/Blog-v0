<template>
  <div class="home-wrap container-wrap">
    <loading v-show="is_loading"></loading>
    <scroller v-show="!is_loading"
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
        <aritcle-item v-for="(article_item,article_index) in articleArr"
          :article_url="'#/'+article_item.article_url"
          :article_type="article_item.article_type"
          :article_title="article_item.article_title"
          :article_time="article_item.article_time">
        </aritcle-item>
      </div>
    </scroller>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/_define.scss";
  .container-content{
    @extend %oh;
  }
</style>
<script>
  import home from '../../assets/js/home.js'
  export default home
</script>
