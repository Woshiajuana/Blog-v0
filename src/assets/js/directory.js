/**
 * Created by Administrator on 2017/4/10.
 */
import { Search } from 'vux'
import Loading from '../../components/Loading.vue'
export default {
  components: {
    Search,
    Loading
  },
  computed: {
    animateName () {
      return this.$store.state.animate_name;
    },
    isLoading () {
      return this.$store.state.directory.is_loading;
    }
  }
}
