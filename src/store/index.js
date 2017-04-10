/*
 * vuex数据控制中心
 * */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './module/home.js'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    left_opt: {
      showBack: false,
      backText: ''
    },
    title: 'HOME',
    animate_name: 'vux-pop-in',
    nav_index: 1
  },
  modules: {
    home: home
  },
  mutations: {
    setTitle (state,title) {
      state.title = title;
    },
    setLeftOpt (state,boolean) {
      state.left_opt.showBack = boolean;
    },
    setNavActiveIndex (state,nav_index) {
      state.nav_index = nav_index;
    },
    setAnimateName (state,animate_name) {
      state.animate_name = animate_name;
    }
  }
})
