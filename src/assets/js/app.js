/**
 * Created by Administrator on 2017/4/1.
 */
import Vue from 'vue'                                       /**引入vue*/
import MyHeader from '../../components/My-Header.vue'       /**引入头部*/
import MyNav from '../../components/My-Nav.vue'             /**引入导航条*/
import SvgTemplate from '../../components/Svg.vue'          /**引入svg图标*/

export default {
  name: 'app',
  computed: {
    animateName () {
      return this.$store.state.animate_name;
    }
  },
  components:{
    MyHeader,
    MyNav,
    SvgTemplate
  }
}
