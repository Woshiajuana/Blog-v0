/**
 * Created by Administrator on 2017/4/10.
 */

/**引入AppTool*/
import AppTool from '../../assets/lib/app-tool.js';

/**引入命名常量*/
import types from '../mutation-types.js';

/**
 * 数据存储
 * */
const state = {
  article_arr: [],
    page_num: 1,
    page_size:10
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
  /**初始化文章数据*/
  articleDataInit ( { state, commit },callback) {
      state.page_num = 0;
      AppTool.HomeAjax.fetchArticle({
          page_num: state.page_num,
          page_size: state.page_size
      },(result) => {
          if(result.status){
              commit(types.INIT_TO_ARTICLE_ARR,{
                  article_arr: result.data,
                  callback
              });
          }
      });
  },
  /**加载文章数据*/
  articleDataLoad ( { state, commit }, callback ) {
      state.page_num++;
      AppTool.HomeAjax.fetchArticle({
          page_num: state.page_num,
          page_size: state.page_size
      },(result) => {
          if(result.status){
              commit(types.ADD_TO_ARTICLE_ARR,{
                  article_arr: result.data,
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
