/**
 * Created by Administrator on 2017/4/10.
 */
export default {
  created: function () {
    this.$store.commit('setTitle','DIRECTORY');
    this.$store.commit('setNavActiveIndex',2);
  }
}
