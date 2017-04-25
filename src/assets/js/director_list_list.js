/**
 * Created by Administrator on 2017/4/13.
 */
import { Cell } from 'vux'
import AppTool from '../../assets/lib/app-tool.js'
export default {
  data: function () {
    return {
      directory_con_arr: null
    }
  },
  components: {
    Cell
  },
  created: function () {
    var directory_type = this.$route.params.type;
    var directory_con_arr = AppTool.dataToSessionStorageOperate.achieve('directory_con_arr');
    if(directory_type != AppTool.dataToSessionStorageOperate.achieve('directory_type')) {
      this.$store.commit('SET_IS_LOADING',true);
      AppTool.DirectoryAjax.initDirectory( {
          tab: directory_type
      } ,(result) => {
        if(result.status){
          setTimeout(() => {
            this.directory_con_arr = result.data;
            AppTool.dataToSessionStorageOperate.save('directory_con_arr',result.data);
            AppTool.dataToSessionStorageOperate.save('directory_type',directory_type);
            this.$store.commit('SET_IS_LOADING',false);
          },1000)
        }
      });
    }else{
      this.directory_con_arr = directory_con_arr;
    }
    this.$store.commit('SET_TITLE',this.$route.params.type);
  },
  activated: function () {
    this.$store.commit('SET_TITLE',this.$route.params.type);
    this.$store.commit('SET_NAV_ACTIVE_INDEX',3);
    this.$store.commit('SET_LEFT_OPT',true);
  }
}
