/*
* 路由控制
* */
import Vue from 'vue'
import Router from 'vue-router'                                   /**路由*/
import Home from '../view/index/Home.vue'                         /**首页*/
import Directory from '../view/directory/Directory.vue'           /**目录页*/
import Donate from '../view/donate/Donate.vue'                    /**二维码捐赠页*/
import Details from '../view/details/Details.vue'                 /**文章详情页*/
import DirList from '../components/Director-List.vue'             /**目录页子页面*/
import DirListList from '../components/Director-List-List.vue'    /**目录页二级子页面*/
Vue.use(Router);
let router = new Router({
  routes: [
    /**首页*/
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        status: 1
      }
    },
    /**目录页*/
    {
      path: '/directory',
      name: 'Directory',
      component: Directory,
      meta: {
        status: 2
      },
      children: [
        /**目录子页*/
        {
          path: '/',
          name: 'dir_list',
          component: DirList,
          meta: {
            status: 3
          }
        },
        /**目录二级子页面*/
        {
          path: ':type',
          name: 'dir_list_list',
          component: DirListList,
          meta: {
            status: 4
          }
        }
      ]
    },
    /**二维码捐赠页*/
    {
      path: '/donate',
      name: 'Donate',
      component: Donate,
      meta: {
        status: 6
      }
    },
    /**文章详情页*/
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
      meta: {
        status: 5
      }
    }
  ]
});
/**设置路由之间的跳转动画*/
router.beforeEach( (to, from, next) => {
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
