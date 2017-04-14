<template>
  <div class="donate-wrap container-wrap">
    <scroller lock-x
              height="-100"
              ref="donateScrollEvent">
      <div class="donate-content">
        <p class="donate-prompt">友情链接</p>
        <img class="donate-img" src="../../assets/images/wx.png" alt=""/>
      </div>
    </scroller>
  </div>
</template>
<script>
  import { Scroller } from 'vux'
  export default {
    components: {
      Scroller
    },
    activated: function () {
      this.$store.commit('SET_TITLE','DONATE');
      this.$store.commit('SET_NAV_ACTIVE_INDEX',4);
      this.$store.commit('SET_LEFT_OPT',true);
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/_define.scss";
  .donate-content{
    @extend %pa;
    @extend %tac;
    margin-top: 100px;
    width: 170px;
    height: 200px;
    left: 50%;
    margin-left: -85px;
  }
  .donate-prompt{
    @extend %f16;
    @extend %fwb;
    line-height: 30px;
  }
  .donate-img{
    @extend %db;
    @extend %ma;
    width: 150px;
    height: 150px;
    border: 10px solid #fff;
  }
</style>
