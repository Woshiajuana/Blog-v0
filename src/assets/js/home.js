/**
 * Created by Administrator on 2017/4/10.
 */
import Loading from '../../components/Loading.vue'
import AritcleItem from '../../components/Article-Item.vue'
import { Scroller } from 'vux'
export default {
  name: 'home',
  data: function () {
    return {
      is_loading: true,
      pull_down_config: {
        content: '下拉刷新',
        height: 60,
        autoRefresh: false,
        downContent: '拉人家干嘛~~~',
        upContent: '疼~还不松开人家',
        loadingContent: 'Loading...',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      pull_up_config: {
        content: '上拉加载',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '疼~还不松开人家',
        upContent: '拉人家干嘛~~~',
        loadingContent: 'Loading...',
        clsPrefix: 'xs-plugin-pullup-'
      }
    }
  },
  computed: {
    articleArr () {
      return this.$store.state.home.article_arr;
    }
  },
  components:{
    Loading,
    AritcleItem,
    Scroller
  },
  methods: {
    onScroll (pos) {
      this.scrollTop = pos.top;
    },
    onPullDownLoading () {
      //用户触发下拉刷新状态，监听该事件以获取加载新数据
      this.$store.dispatch('articleDataRefresh', () => {
          this.$nextTick(() => {
            this.$refs.homeScrollEvent.reset();
            this.$refs.homeScrollEvent.donePulldown();
          });
        }
      );
    },
    onPullUpLoading () {
      //用户触发上拉加载状态，监听该事件以加载新数据
      this.$store.dispatch('articleDataLoad', () => {
          this.$nextTick(() => {
            this.$refs.homeScrollEvent.reset();
            this.$refs.homeScrollEvent.donePullup();
          })
        }
      );
    }
  },
  created: function () {
    setTimeout(() => {
      this.$store.dispatch('articleDataInit', () => {
          this.$nextTick(() => {
            this.is_loading = false;
            setTimeout(() => {
              this.$refs.homeScrollEvent.reset()
            },520)
          })
        }
      );
    },2000)
  },
  activated: function () {
    this.$store.commit('SET_TITLE','HOME');
    this.$store.commit('SET_NAV_ACTIVE_INDEX',1);
    this.$store.commit('SET_LEFT_OPT',false);
  }
}
