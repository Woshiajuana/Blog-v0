/**
 * Created by Administrator on 2017/4/10.
 */
export default {
  state: {
    position: 0,
    article_arr: []
  },
  mutations: {
    remberPositionY (state,positionY) {
      state.position = positionY;
    },
    initArticleArr (state,article_arr,callback) {
      state.article_arr = article_arr;
      callback && callback()
    },
    refreshArticleArr (state,article_obj) {
      state.article_arr.unshift(article_obj,article_obj,article_obj)
    },
    loadArticleArr (state,article_obj) {
      state.article_arr.push(article_obj,article_obj,article_obj)
    }
  }
}
