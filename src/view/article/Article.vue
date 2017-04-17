<template>
  <div class="details-wrap container-wrap">
    <scroller lock-x
              height="-100"
              :scrollbarY="true"
              ref="detailsScrollEvent">
      <div class="details-content">
        <p class="details-content-item" v-for="article_con in article_con_arr" v-text="article_con"></p>
      </div>
    </scroller>
  </div>
</template>
<style lang="scss">
  .details-content{
    color: #666;
    line-height: 1.8;
    font-size: 13px;
    padding: 10px;
  }
  .details-content img{
    display: block;
    max-width: 100%;
  }
  .details-content-item{
    text-indent: 2em;
    margin: 10px 0;
  }
</style>
<script>
  import { Scroller } from 'vux';
  import AppTool from '../../assets/lib/app-tool';
  import types from '../../store/mutation-types';
  export default {
    components: {
      Scroller
    },
    data () {
        return {
            article_con_arr: []
        }
    },
    created: function () {
      this.$store.commit('SET_NAV_ACTIVE_INDEX',-2);
    },
    beforeRouteEnter (to, from, next) {
        /***/
        var article_id = AppTool.dataToSessionStorageOperate.achieve('article_id');
        if(article_id != to.params.id){
          AppTool.ArticleAjax.achieveArticle(to.params.id,({status,result}) =>{
            if(status == 1){
              AppTool.dataToSessionStorageOperate.save('article_id',to.params.id);
              AppTool.dataToSessionStorageOperate.save('article_con_arr',result.article_con.split('/'));
              AppTool.dataToSessionStorageOperate.save('article_title',result.article_title);
              next( vm => {
                vm.article_con_arr = result.article_con.split('/');
                vm.$store.commit('SET_TITLE',result.article_title);
              })
            }
          },() => {
              next();
          });
        }else{
          next( vm => {
            vm.article_con_arr = AppTool.dataToSessionStorageOperate.achieve('article_con_arr');
            vm.$store.commit('SET_TITLE',AppTool.dataToSessionStorageOperate.achieve('article_title'));
          })
        }
    },
    activated: function () {
      this.$nextTick(() => {
        this.$refs.detailsScrollEvent.reset({
          top: 0
        });
      });
      this.$store.commit('SET_NAV_ACTIVE_INDEX',-2);
      this.$store.commit('SET_LEFT_OPT',true);
    }
  }
</script>
