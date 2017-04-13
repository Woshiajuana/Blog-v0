/**
 * Created by Administrator on 2017/4/13.
 */
import { Cell } from 'vux'
export default {
  computed: {
    directoryArr () {
      return this.$store.state.directory.directory_arr;
    }
  },
  components: {
    Cell
  },
  created: function () {
    this.$store.commit('setTitle','DIRECTORY');
    this.$store.dispatch('directoryDataInit',{callback:() => {
      console.log(1)
    }});
  },
  activated: function () {
    this.$store.commit('setTitle','DIRECTORY');
    this.$store.commit('setNavActiveIndex',2);
    this.$store.commit('setLeftOpt',true);
  }
}
