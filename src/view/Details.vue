<template>
  <div class="details-wrap container-wrap">
    <p class="details-content">
      相信很多朋友初次接触到dcloud这边的产品，一般都是hbuilder和mui，所以很多朋友对于dcloud这边的产品链的认识也是各不相同。我相信对于很多新手来说，初次使用dcloud这边的产品的第一感觉一定是觉得这个东西很好却无从下手，然后被一些新的概念转得云里雾里，然后就开始吐槽官方文档，其实真的是文档不好吗？
      稍微有点基础的开发者可能仔细去看看官方文档，然后就可以自己跟着文档或者demo做点小例子，然而很多人由于是业务临时需要才转到跨平台app开发的，很多可以说零基础，即使有文档也不定会看得懂，或者看了更晕，相信这部分开发者最期待的是有人手把手教最好，我见过很多开发者一上来一言不合就要例子，如果你让他去看hello mui,hello h5+这两个最精华的例子，他也许会觉得你在逗他。
    </p>
    <p class="details-content">
      相信很多朋友初次接触到dcloud这边的产品，一般都是hbuilder和mui，所以很多朋友对于dcloud这边的产品链的认识也是各不相同。我相信对于很多新手来说，初次使用dcloud这边的产品的第一感觉一定是觉得这个东西很好却无从下手，然后被一些新的概念转得云里雾里，然后就开始吐槽官方文档，其实真的是文档不好吗？
      稍微有点基础的开发者可能仔细去看看官方文档，然后就可以自己跟着文档或者demo做点小例子，然而很多人由于是业务临时需要才转到跨平台app开发的，很多可以说零基础，即使有文档也不定会看得懂，或者看了更晕，相信这部分开发者最期待的是有人手把手教最好，我见过很多开发者一上来一言不合就要例子，如果你让他去看hello mui,hello h5+这两个最精华的例子，他也许会觉得你在逗他。
    </p>
    <p class="details-content">
      相信很多朋友初次接触到dcloud这边的产品，一般都是hbuilder和mui，所以很多朋友对于dcloud这边的产品链的认识也是各不相同。我相信对于很多新手来说，初次使用dcloud这边的产品的第一感觉一定是觉得这个东西很好却无从下手，然后被一些新的概念转得云里雾里，然后就开始吐槽官方文档，其实真的是文档不好吗？
      稍微有点基础的开发者可能仔细去看看官方文档，然后就可以自己跟着文档或者demo做点小例子，然而很多人由于是业务临时需要才转到跨平台app开发的，很多可以说零基础，即使有文档也不定会看得懂，或者看了更晕，相信这部分开发者最期待的是有人手把手教最好，我见过很多开发者一上来一言不合就要例子，如果你让他去看hello mui,hello h5+这两个最精华的例子，他也许会觉得你在逗他。
    </p>
  </div>
</template>
<style lang="scss">
  .details-wrap{
    color: #666;
    line-height: 1.8;
    font-size: 12px;
    padding: 10px;
  }
  .details-wrap img{
    display: block;
    max-width: 100%;
  }
  .details-content{
    text-indent: 2em;
    margin: 10px 0;
  }
</style>
<script>
  export default {
    created: function () {
      this.$store.commit('setTitle','文章');
      this.$store.commit('setNavActiveIndex',1);
      this.$store.commit('setLeftOpt',true);
    }
  }
</script>
