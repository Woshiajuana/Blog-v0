/**
 * vuex数据控制中心
 * */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './module/home.js'
import directory from './module/directory.js'
import types from './mutation-types.js'
Vue.use(Vuex);

/**
 * 数据存储
 * */
const state = {
  left_opt: {
    showBack: false,
    backText: ''
  },
  title: 'HOME',
  animate_name: 'vux-pop-in',
  nav_index: 1,
  is_loading: true
};

/**
 * 模块
 * */
const modules = {
  home,
  directory
};

/**
 * 提交同步请求
 * */
const mutations = {
  /**全局设置标题*/
  [ types.SET_TITLE ] (state,title) {
    state.title = title;
  },
  /**全局设置头部返回箭头的状态*/
  [ types.SET_LEFT_OPT ] (state,boolean) {
    state.left_opt.showBack = boolean;
  },
  /**全局设置导航条active状态*/
  [ types.SET_NAV_ACTIVE_INDEX ] (state,nav_index) {
    state.nav_index = nav_index;
  },
  /**全局判断前进回退的动画*/
  [ types.SET_ANIMATE_NAME ] (state,animate_name) {
    state.animate_name = animate_name;
  },
  /**全局修改loading的状态*/
  [ types.SET_IS_LOADING_STATE ] ( state,is_loading ) {
    state.is_loading = is_loading;
  }
};

export default new Vuex.Store({
  state,
  modules,
  mutations
})
