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
  is_loading: false
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

};

/**
 * 提交同步请求
 * */
const mutations = {
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
