<template>
  <!--搜索文章页面-->
    <div class="search-wrap container-wrap">
      <scroller lock-x
                height="-100"
                ref="searchScrollEvent">
        <div class="search-content">
          <search position="absolute"
                  auto-scroll-to-top
                  top="0">
          </search>
        </div>
      </scroller>
    </div>
  <!--/搜索文章页面-->
</template>
<script>
  import { Scroller,Search } from 'vux'
  export default {
    components: {
      Scroller,
      Search
    },
    activated: function () {
      this.$store.commit('SET_TITLE','SEARCH');
      this.$store.commit('SET_NAV_ACTIVE_INDEX',2);
      this.$store.commit('SET_LEFT_OPT',true);
    }
  }
</script>
