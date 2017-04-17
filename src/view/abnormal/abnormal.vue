<template>
  <div class="abnormal-warp container-warp">
    <div class="abnormal-content">
      <svg slot="icon" class="icon-svg icon-abnormal">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-abnormal"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/define";
  .abnormal-content{
    @extend %oh;
  }
  .icon-abnormal{
    @extend %db;
    margin: 150px auto 0;
    width: 150px;
    height: 150px;
  }

</style>
