<template>
  <!--搜索文章页面-->
    <div class="search-wrap container-wrap">
      <scroller lock-x
                height="-100"
                ref="searchScrollEvent">
        <div class="donate-content">
          <p class="donate-prompt">友情链接</p>
          <img class="donate-img" src="../../assets/images/wx.png" alt=""/>
        </div>
      </scroller>
    </div>
  <!--/搜索文章页面-->
</template>
<script>
  import { Scroller } from 'vux'
  export default {
    components: {
      Scroller
    },
    activated: function () {
      this.$store.commit('SET_TITLE','SEARCH');
      this.$store.commit('SET_NAV_ACTIVE_INDEX',2);
      this.$store.commit('SET_LEFT_OPT',true);
    }
  }
</script>
