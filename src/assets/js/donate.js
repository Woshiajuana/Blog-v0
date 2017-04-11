/**
 * Created by Administrator on 2017/4/10.
 */
import { Scroller } from 'vux'
export default {
  created: function () {},
  components: {
    Scroller
  },
  activated: function () {
    this.$store.commit('setTitle','DONATE');
    this.$store.commit('setNavActiveIndex',3);
    this.$store.commit('setLeftOpt',true);
  }
}
