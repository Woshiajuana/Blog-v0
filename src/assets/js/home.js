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
      var _this = this;
      this.$store.dispatch('articleDataRefresh',{
        _this: this,
        callback: function(){
          _this.$nextTick(() => {
            _this.$refs.homeScrollEvent.reset();
            _this.$refs.homeScrollEvent.donePulldown();
          });
        }
      });
    },
    onPullUpLoading () {
      //用户触发上拉加载状态，监听该事件以加载新数据
      var _this = this;
      this.$store.dispatch('articleDataLoad',{
        _this: this,
        callback: function(){
          _this.$nextTick(() => {
            _this.$refs.homeScrollEvent.reset();
            _this.$refs.homeScrollEvent.donePullup();
          })
        }
      });
    }
  },
  created: function () {
    var _this = this;
    setTimeout(function(){
      _this.$store.dispatch('articleDataInit',{
        _this: _this,
        callback: function(){
          _this.$nextTick(() => {
            _this.is_loading = false;
            setTimeout(function(){
              _this.$refs.homeScrollEvent.reset()
            },520)
          })
        }
      });
    },2000)
  },
  activated: function () {
    this.$store.commit('setTitle','HOME');
    this.$store.commit('setNavActiveIndex',1);
    this.$store.commit('setLeftOpt',false);
  }
}
