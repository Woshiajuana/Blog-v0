/**
 * Created by Administrator on 2017/4/10.
 */

/**引入axios*/
import AppTool from '../../assets/lib/app-tool.js';

/**引入命名常量*/
import types from '../mutation-types.js';

/**
 * 数据存储
 * */
const state = {
  article_arr: []
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
  //初始化文章数据
  articleDataInit ( { commit },callback) {
    AppTool.HomeAjax.initArticle(function (result) {
      if(result.status){
        commit(types.INIT_TO_ARTICLE_ARR,{
          article_arr: result.result,
          callback
        });
      }
    });
  },
  //刷新文章数据
  articleDataRefresh ( { state, commit }, callback ) {
    AppTool.HomeAjax.refreshArticle(function (result) {
      if(result.status){
        commit(types.REFRESH_TO_ARTICLE_ARR,{
          article_arr: result.result,
          callback
        });
      }
    });
  },
  //加载文章数据
  articleDataLoad ( { state, commit }, callback ) {
    AppTool.HomeAjax.loadArticle(function (result) {
      if(result.status){
        commit(types.ADD_TO_ARTICLE_ARR,{
          article_arr: result.result,
          callback
        });
      }
    });
  }
};

/**
 * 提交同步请求
 * */
const mutations = {
  /**初始化首页文章列表数据*/
  [ types.INIT_TO_ARTICLE_ARR ] (state,{ article_arr , callback}) {
    state.article_arr = article_arr;
    callback && callback();
  },
  /**刷新首页文章列表数据*/
  [ types.REFRESH_TO_ARTICLE_ARR ] (state,{ article_arr , callback}) {
    state.article_arr.unshift(...article_arr);
    callback && callback();
  },
  /**加载首页文章列表数据*/
  [ types.ADD_TO_ARTICLE_ARR ] (state,{ article_arr , callback}) {
    state.article_arr.push(...article_arr);
    callback && callback();
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
