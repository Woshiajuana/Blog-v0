/**
 * Created by Administrator on 2017/4/13.
 */
import { Cell } from 'vux'
export default {
  computed: {
    directoryArr () {
      return this.$store.state.directory.directory_con_arr;
    }
  },
  components: {
    Cell
  },
  created: function () {
    var type = this.$route.params.type;
    this.$store.commit('SET_TITLE',this.$route.params.type);
    this.$store.dispatch('directorySonDataInit',{ data:type ,callback:() => {
      console.log(2)
    }});
  },
  activated: function () {
    this.$store.commit('SET_TITLE',this.$route.params.type);
    this.$store.commit('SET_NAV_ACTIVE_INDEX',3);
    this.$store.commit('SET_LEFT_OPT',true);
  }
}
