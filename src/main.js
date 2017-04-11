/*
* 入口文件
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import './assets/js/flexible.js'
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
