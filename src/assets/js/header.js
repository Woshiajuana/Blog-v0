/**
 * Created by Administrator on 2017/4/1.
 */
import { XHeader } from 'vux';
export default {
  name: 'header',
  data: function () {
    return {
      left_opt: {
        showBack: false,
        backText: ''
      },
      title: 'HOME'
    }
  },
  components: {
    XHeader
  }
}
