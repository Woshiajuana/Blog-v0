<template>
  <div class="directory-content">
    <cell v-for="(dir_item,dir_index) in directory_con_arr"
          :title="dir_item.article_title"
          :link="'/article/' + dir_item._id"
          is-link>
    </cell>
  </div>
</template>
<script>
  import director_list_list from '../assets/js/director_list_list.js';
  export default director_list_list
</script>
