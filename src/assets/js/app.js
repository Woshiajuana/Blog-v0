/**
 * Created by Administrator on 2017/4/1.
 */
import Vue from 'vue'
import MyHeader from '../../components/My-header.vue'
import MyNav from '../../components/My-nav.vue'
import SvgTemplate from '../../components/Svg.vue'

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
