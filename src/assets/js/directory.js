/**
 * Created by Administrator on 2017/4/10.
 */
import { Search } from 'vux'
import { Cell , Group } from 'vux'
export default {
  components: {
    Search,
    Cell,
    Group
  },
  data: function () {
    return {
      showContent004: false
    }
  },
  created: function () {
    //this.$store.commit('setTitle','DIRECTORY');
    //this.$store.commit('setNavActiveIndex',2);
    //this.$store.commit('setLeftOpt',true);
  },
  activated: function () {
    this.$store.commit('setTitle','DIRECTORY');
    this.$store.commit('setNavActiveIndex',2);
    this.$store.commit('setLeftOpt',true);
  }
}
