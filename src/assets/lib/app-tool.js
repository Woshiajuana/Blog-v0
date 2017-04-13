/**
 * Created by Administrator on 2017/4/13.
 */
/**引入axios*/
import axios from 'axios';
let AppTool = function (win) {
  /**
   * 定义一系列变量
   * */
  var AppTool = {},
    base_url = ''
    //base_url = '//www.owulia.com/ajuan';

  /**
   * 根据是线上环境还是本地环境，选取不同的server_url的值
   * */
  if(win.location.href.indexOf('localhost') > -1){
    base_url = '';
  }

  /**
   * 首页数据请求
   * */
  AppTool.HomeAjax = {
    /**请求初始化文章列表数据*/
    initArticle: function (success_callback, fail_callback) {
      AppTool.ajax('/static/home/home.json',{},'get',success_callback,fail_callback);
    },
    /**刷新文章列表数据*/
    refreshArticle: function (success_callback, fail_callback) {
      AppTool.ajax('/static/home/home_resh.json',{},'get',success_callback,fail_callback);
    },
    /**加载文章列表数据*/
    loadArticle: function (success_callback, fail_callback) {
      AppTool.ajax('/static/home/home_load.json',{},'get',success_callback,fail_callback);
    }
  };

  /**
   * 公用请求ajax的方式
   * */
  AppTool.ajax = function (path, data, http_method, success_callback, fail_callback) {
    axios({
      url: path,
      method: http_method,
      baseURL: base_url,
      params: data
    }).then( function (response) {
      success_callback && success_callback(response.data);
      fail_callback && fail_callback( result );
    }).catch( function (error) {
      fail_callback && fail_callback( error );
    });
  };
  return AppTool;
} (window);
export default AppTool;
