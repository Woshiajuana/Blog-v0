/**
 * Created by Administrator on 2017/4/10.
 */
import Loading from '../../components/Loading.vue'
export default {
  name: 'home',
  data: function () {
    return {
      is_loading: false
    }
  },
  components:{
    Loading
  },
  created: function () {
    this.$store.commit('setTitle','HOME');
    this.$store.commit('setNavActiveIndex',1);
    this.$store.commit('setLeftOpt',false);
  }
}
