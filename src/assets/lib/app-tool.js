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
    base_url = '//www.owulia.com/ajuan';

  /**
   * 根据是线上环境还是本地环境，选取不同的server_url的值
   * */
  if(win.location.href.indexOf('localhost') > -1){
    base_url = 'http://localhost:8088';
  }

  /**
   * 操作数据到sessionstorage
   * */
  AppTool.dataToSessionStorageOperate = {
    /**存储*/
    save: function (data_name,data_value) {
      if(data_name && data_value)
        sessionStorage.setItem(data_name,JSON.stringify(data_value));
    },
    /**取出*/
    achieve: function (data_name) {
      var data_value = sessionStorage.getItem(data_name);
      data_value && (data_value = JSON.parse(data_value));
      return data_value;
    },
    /**删除*/
    remove: function (data_name) {
      if(data_name)
        sessionStorage.removeItem(data_name);
    },
    /**清空*/
    clear: function () {
      sessionStorage.clear();
    }
  };

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
    },
      /**请求数据*/
      fetchArticle: function (data,success_callback, fail_callback) {
          AppTool.ajax('/ajuan/fetchArticle',data,'get',success_callback,fail_callback);
      }
  };

  /**
   * 文章页数据请求
   * */
  AppTool.ArticleAjax = {
    /**根据文章ID请求文章内容*/
    achieveArticle: function (article_id,success_callback,fail_callback)　{
      if(article_id)
        AppTool.ajax('/ajuan/fetchDetail',{article_id},'get',success_callback,fail_callback);
    }
  };

  /**
   * 目录数据请求
   * */
  AppTool.DirectoryAjax = {
    /**请求目录列表数据*/
    initDirectory: function ( data, success_callback, fail_callback) {
        AppTool.ajax('/ajuan/fetchArticle',data,'get',success_callback,fail_callback);
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
