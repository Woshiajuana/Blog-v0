/*
* 路由控制
* */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import Directory from '../view/Directory.vue'
import Donate from '../view/Donate.vue'
import Details from '../view/Details.vue'
Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        status: 1,
        keep_alive: true
      }
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory,
      meta: {
        status: 2,
        keep_alive: false
      }
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate,
      meta: {
        status: 3,
        keep_alive: false
      }
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
      meta: {
        status: 4,
        keep_alive: false
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  let _this = this;
  let store = _this.a.app.$store;
  if(!store){
    setTimeout(function () {
      store = _this.a.app.$store;
      if(from.meta.status > to.meta.status){
        store.commit('setAnimateName','vux-pop-out');
      }else{
        store.commit('setAnimateName','vux-pop-in');
      }
      next();
    },300)
  }else{
    if(from.meta.status > to.meta.status){
      store.commit('setAnimateName','vux-pop-out');
    }else{
      store.commit('setAnimateName','vux-pop-in');
    }
    next();
  }
});
export default router
