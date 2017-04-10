/**
 * Created by Administrator on 2017/4/10.
 */
export default {
  created: function () {
    this.$store.commit('setTitle','DONATE');
    this.$store.commit('setNavActiveIndex',3);
    this.$store.commit('setLeftOpt',true);
  }
}
