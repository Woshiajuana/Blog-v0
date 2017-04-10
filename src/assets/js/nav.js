/**
 * Created by Administrator on 2017/4/7.
 */
import { Tabbar, TabbarItem } from 'vux';
export default {
  name: 'nav',
  computed: {
    navActive () {
      return this.$store.state.nav_index ;
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
