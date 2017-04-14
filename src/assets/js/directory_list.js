/**
 * Created by Administrator on 2017/4/13.
 */
import { Cell } from 'vux'
import AppTool from '../../assets/lib/app-tool.js'
export default {
  data: function () {
    return {
      directory_arr: null
    }
  },
  components: {
    Cell
  },
  created: function () {
    /**获取数据*/
    var directory_arr = AppTool.dataToSessionStorageOperate.achieve('directory_arr');
    if(!directory_arr){
      this.$store.commit('SET_IS_LOADING',true);
      AppTool.DirectoryAjax.initDirectory('' ,(result) => {
        if(result.status){
          setTimeout(() => {
            this.directory_arr = result.result;
            AppTool.dataToSessionStorageOperate.save('directory_arr',result.result);
            this.$store.commit('SET_IS_LOADING',false);
          },1000)
        }
      });
    }else {
      this.$store.commit('SET_IS_LOADING',false);
      this.directory_arr = directory_arr;
    }
    this.$store.commit('SET_TITLE','DIRECTORY');
  },
  activated: function () {
    this.$store.commit('SET_TITLE','DIRECTORY');
    this.$store.commit('SET_NAV_ACTIVE_INDEX',3);
    this.$store.commit('SET_LEFT_OPT',true);
  }
}

