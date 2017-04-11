/**
 * Created by Administrator on 2017/4/10.
 */
import Loading from '../../components/Loading.vue'
import { Scroller, Divider, Spinner, XButton, Group, Cell } from 'vux'
export default {
  name: 'home',
  data: function () {
    return {
      is_loading: false,
      article_arr: [],
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

  },
  components:{
    Loading,
    Scroller
  },
  methods: {
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    onPullDownLoading () {
      //用户触发下拉刷新状态，监听该事件以获取加载新数据
      ArticleController.refresh(this);
    },
    onPullUpLoading () {
      //用户触发上拉加载状态，监听该事件以加载新数据
      ArticleController.load(this);
    }
  },
  created: function () {
    this.$store.commit('setTitle','HOME');
    this.$store.commit('setNavActiveIndex',1);
    this.$store.commit('setLeftOpt',false);
    ArticleController.init(this)
  }
}

let ArticleController = {
  //初始化获取数据
  init: function (_this) {
    _this.$http.get('../../static/home/home.json')
      .then(function (response) {
        if(response.data.status){
          _this.article_arr = response.data.result;
          _this.$nextTick(() => {
            _this.$refs.scrollerEvent.reset()
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  //下拉刷新数据
  refresh: function (_this) {
    let art_obj = {
      "article_id": 11,
      "article_title": "专业译文需求，试试百度人工翻译专业译文需求，试试百度人工翻译",
      "article_type": "vue",
      "article_time": "2017-4-10"
    };
    _this.article_arr.unshift(art_obj,art_obj,art_obj);
    _this.$nextTick(() => {
      _this.$refs.scrollerEvent.reset();
      _this.$refs.scrollerEvent.donePulldown();
    })
  },
  //加载数据
  load: function (_this) {
    let art_obj = {
      "article_id": 11,
      "article_title": "专业译文需求，试试百度人工翻译专业译文需求，试试百度人工翻译",
      "article_type": "angularJs",
      "article_time": "2017-4-10"
    };
    _this.article_arr.push(art_obj,art_obj,art_obj);
    _this.$nextTick(() => {
      _this.$refs.scrollerEvent.reset();
      _this.$refs.scrollerEvent.donePullup();
    })
  }
};
