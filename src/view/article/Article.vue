<template>
  <div class="details-wrap container-wrap">
    <scroller lock-x
              height="-100"
              :scrollbarY="true"
              ref="detailsScrollEvent">
      <div class="details-content" v-html="article_con">

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
      p{
          text-indent: 2em;
          margin: 10px 0;
      }
  }
  .details-content img{
    display: block;
    max-width: 100%;
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
            article_con: ''
        }
    },
    created: function () {
      this.$store.commit('SET_NAV_ACTIVE_INDEX',-2);
    },
    beforeRouteEnter (to, from, next) {
        /***/
        var article_id = AppTool.dataToSessionStorageOperate.achieve('article_id');
        if(article_id != to.params.id){
          AppTool.ArticleAjax.achieveArticle(to.params.id,({status,data,msg}) =>{
            if(status == 1){
              AppTool.dataToSessionStorageOperate.save('article_id',to.params.id);
              AppTool.dataToSessionStorageOperate.save('article_con',data[0].article_content);
              AppTool.dataToSessionStorageOperate.save('article_title',data[0].article_title);
              next( vm => {
                vm.article_con = data[0].article_content;
                vm.$store.commit('SET_TITLE',data[0].article_title);
              })
            }else{
                console.log(msg)
            }
          },() => {
              next();
          });
        }else{
          next( vm => {
            vm.article_con = AppTool.dataToSessionStorageOperate.achieve('article_con');
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
