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
    this.$store.commit('setTitle',this.$route.params.type);
    this.$store.dispatch('directorySonDataInit',{ data:type ,callback:() => {
      console.log(2)
    }});
  },
  activated: function () {
    this.$store.commit('setTitle',this.$route.params.type);
    this.$store.commit('setNavActiveIndex',2);
    this.$store.commit('setLeftOpt',true);
  }
}
