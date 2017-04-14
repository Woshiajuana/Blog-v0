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
    this.$store.commit('SET_TITLE','DIRECTORY');
    this.$store.dispatch('directoryDataInit',{callback:() => {
      console.log(1)
    }});
  },
  activated: function () {
    this.$store.commit('SET_TITLE','DIRECTORY');
    this.$store.commit('SET_NAV_ACTIVE_INDEX',3);
    this.$store.commit('SET_LEFT_OPT',true);
  }
}
