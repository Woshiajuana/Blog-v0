/**
 * Created by Administrator on 2017/4/11.
 */
import { Scroller } from 'vux'
export default {
  components: {
    Scroller
  },
  activated: function () {
    var _this = this;
    _this.$nextTick(() => {
      _this.$refs.detailsScrollEvent.reset({
        top: 0
      });
    });
    this.$store.commit('setTitle','文章' + this.$route.params.id);
    this.$store.commit('setNavActiveIndex',1);
    this.$store.commit('setLeftOpt',true);
  }
}
