/**
 * Created by Administrator on 2017/4/1.
 */
import { XHeader } from 'vux';
export default {
  name: 'header',
  data: function () {
    return {

    }
  },
  computed: {
    title () {
      return this.$store.state.title;
    },
    leftOpt () {
      return this.$store.state.left_opt;
    }
  },
  components: {
    XHeader
  }
}
