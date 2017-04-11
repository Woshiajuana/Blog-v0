/**
 * Created by Administrator on 2017/4/10.
 */

const state = {
  article_arr: []
};

const actions = {
  //初始化文章数据
  articleDataInit ( { state, commit }, { _this , callback } ) {
    //if(state.article_arr.length) return;
    _this.$http.get('../../static/home/home.json')
      .then(function (response) {
        if(response.data.status){
          commit('initArticleArr',{
            article_arr:response.data.result,
            callback
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      }
    );
  },
  //刷新文章数据
  articleDataRefresh ( { state, commit }, { _this , callback } ) {
    _this.$http.get('../../static/home/home_resh.json')
      .then(function (response) {
        if(response.data.status){
          commit('refreshArticleArr',{
            article_arr:response.data.result,
            callback
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      }
    );
  },
  //加载文章数据
  articleDataLoad ( { state, commit }, { _this , callback } ) {
    _this.$http.get('../../static/home/home_load.json')
      .then(function (response) {
        if(response.data.status){
          commit('loadArticleArr',{
            article_arr:response.data.result,
            callback
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      }
    );
  }
};

const getters = {
  getMineBaseMsg: state => state.getMineBaseMsg
};

const mutations = {
  initArticleArr (state,{ article_arr , callback}) {
    state.article_arr = article_arr;
    callback && callback();
  },
  refreshArticleArr (state,{ article_arr , callback}) {
    state.article_arr.unshift(...article_arr);
    callback && callback();
  },
  loadArticleArr (state,{ article_arr , callback}) {
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
