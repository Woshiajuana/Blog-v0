/**
 * Created by Administrator on 2017/4/10.
 */
import { Search } from 'vux'
export default {
  components: {
    Search
  },
  computed: {
    animateName () {
      return this.$store.state.animate_name;
    }
  }
}
