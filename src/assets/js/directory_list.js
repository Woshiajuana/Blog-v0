/**
 * Created by Administrator on 2017/4/13.
 */
import { Cell } from 'vux'
export default {
  data: function () {
    return {
      directory_arr: [
          {
              "title": "Java",
              "url": "/directory/java"
          },
          {
              "title": "Node.js",
              "url": "/directory/node"
          },
          {
              "title": "Javascript",
              "url": "/directory/js"
          },
          {
              "title": "Vue.js",
              "url": "/directory/vue"
          },
          {
              "title": "Angular.js",
              "url": "/directory/angular"
          },
          {
              "title": "Html5",
              "url": "/directory/html"
          },
          {
              "title": "Css3",
              "url": "/directory/css"
          }
      ]
    }
  },
  components: {
    Cell
  },
  created: function () {
    this.$store.commit('SET_TITLE','DIRECTORY');
  },
  activated: function () {
    this.$store.commit('SET_TITLE','DIRECTORY');
    this.$store.commit('SET_NAV_ACTIVE_INDEX',3);
    this.$store.commit('SET_LEFT_OPT',true);
  }
}

