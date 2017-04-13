/**
 * Created by Administrator on 2017/4/12.
 */

/**引入AppTool*/
import AppTool from '../../assets/lib/app-tool.js';

/**引入命名常量*/
import types from '../mutation-types.js';

/**
 * 数据存储
 * */
const state = {
  directory_arr: [],
  directory_con_arr: [],
  is_loading: true
};

/**
 * 数据过滤
 * */
const getters = {

};

/**
 * 提交异步请求
 * */
const actions = {
  /**初始化目录数据*/
  directoryDataInit ( { commit },{ data , callback }) {
    commit(types.SET_IS_LOADING,true);
    AppTool.DirectoryAjax.initDirectory( data ,function (result) {
      if(result.status){
        setTimeout(() => {
          commit(types.SET_IS_LOADING,false);
          commit(types.INIT_TO_DIRECTORY_ARR,{
            directory_arr: result.result,
            callback
          });
        },1000)
      }
    });
  },
  /**初始化子级目录*/
  directorySonDataInit ( { commit },{ data , callback }) {
    commit(types.SET_IS_LOADING,true);
    AppTool.DirectoryAjax.initDirectory( data ,function (result) {
      if(result.status){
        setTimeout(() => {
          commit(types.SET_IS_LOADING,false);
          commit(types.INIT_TO_SON_DIRECTORY_ARR,{
            directory_con_arr: result.result,
            callback
          });
        },1000)
      }
    });
  }
};

/**
 * 提交同步请求
 * */
const mutations = {
  /**添加目录数据*/
  [ types.INIT_TO_DIRECTORY_ARR ] ( state ,{ directory_arr ,callback}) {
    state.directory_arr = directory_arr;
    callback && callback();
  },
  /**添加子目录数据*/
  [ types.INIT_TO_SON_DIRECTORY_ARR ] ( state ,{ directory_con_arr ,callback}) {
    state.directory_con_arr = directory_con_arr;
    callback && callback();
  },
  /**设置是否显示关闭*/
  [ types.SET_IS_LOADING ] (state,is_loading) {
    state.is_loading = is_loading;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
