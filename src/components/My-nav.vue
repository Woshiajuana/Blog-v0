<!--导航条组件-->
<template>
  <tabbar>
    <tabbar-item :selected="navActive == 1" link="/">
      <svg slot="icon" class="icon-svg icon-home">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-home"></use>
      </svg>
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item :selected="navActive == 2" link="/search">
      <svg slot="icon" class="icon-svg icon-search">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
      </svg>
      <span slot="label">Search</span>
    </tabbar-item>
    <tabbar-item :selected="navActive == 3" link="/directory">
      <svg slot="icon" class="icon-svg icon-dir">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dir"></use>
      </svg>
      <span slot="label">Directory</span>
    </tabbar-item>
    <tabbar-item :selected="navActive == 4" show-dot link="/donate">
      <svg slot="icon" class="icon-svg icon-don">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-don"></use>
      </svg>
      <span slot="label">Donate</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vux';
  export default {
    name: 'nav',
    computed: {
      navActive () {
        return this.$store.state.nav_index;
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>
<style lang="scss">
  @import "../assets/scss/_define.scss";
  .weui-tabbar__item .icon-svg {
    width: 27px;
    height: 27px;
    fill: #999;
    margin-top: 1px;
  &.icon-dir{
     margin-top: 2px;
     width: 25px;
     height: 25px;
   }
  &.icon-don{
     margin-top: 4px;
     width: 23px;
     height: 23px;
   }
   &.icon-search{
      margin-top: 2px;
    }
  }
  .weui-tabbar__item.weui-bar__item_on .icon-svg {
  @extend %f699;
  }
  .weui-tabbar__item.weui-bar__item_on span {
  @extend %cfff;
    background-color: #669999;
    padding: 0 4px;
    border-radius: 7px;
  }
</style>
