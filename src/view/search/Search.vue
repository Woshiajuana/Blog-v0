<template>
  <!--搜索文章页面-->
    <div class="search-wrap container-wrap">
      <scroller lock-x
                height="-100"
                ref="searchScrollEvent">
        <div class="search-content">
          <search
            @result-click="resultClick"
            @on-change="getResult"
            :results="results"
            v-model="value"
            position="absolute"
            auto-scroll-to-top
            top="0"
            @on-focus="onFocus"
            @on-cancel="onCancel">
          </search>
        </div>
      </scroller>
    </div>
  <!--/搜索文章页面-->
</template>
<script>
  import { Scroller, Search} from 'vux'
  export default {
    data () {
      return {
        results: [],
        value: ''
      }
    },
    components: {
      Scroller,
      Search
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    },
    activated: function () {
      this.$store.commit('SET_TITLE','SEARCH');
      this.$store.commit('SET_NAV_ACTIVE_INDEX',2);
      this.$store.commit('SET_LEFT_OPT',true);
    }
  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>
