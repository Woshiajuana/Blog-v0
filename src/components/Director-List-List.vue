<template>
  <div class="directory-content">
    <cell v-for="(dir_item,dir_index) in directory_arr"
          :title="dir_item.title"
          :link="dir_item.url"
          is-link>
    </cell>
  </div>
</template>
<script>
  import { Cell } from 'vux'
  export default {
    data: function () {
      return {
        directory_arr: []
      }
    },
    components: {
      Cell
    },
    created: function () {
      var _this = this;
      this.$store.commit('setTitle',this.$route.params.type);
      this.$http.get('../../static/directory/dir_'+ this.$route.params.type +'.json')
        .then(function (response) {
          if(response.data.status){
            _this.directory_arr = response.data.result;
          }
        })
        .catch(function (error) {
          console.log(error);
        }
      );
    },
    activated: function () {
      this.$store.commit('setTitle',this.$route.params.type);
      this.$store.commit('setNavActiveIndex',2);
      this.$store.commit('setLeftOpt',true);
    }
  }
</script>
