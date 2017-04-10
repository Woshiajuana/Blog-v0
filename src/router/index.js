/*
* 路由控制
* */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import Directory from '../view/Directory.vue'
import Donate from '../view/Donate.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    }
  ]
})
