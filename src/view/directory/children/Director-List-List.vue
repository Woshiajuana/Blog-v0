<template>
  <div class="directory-content">
    <cell v-for="(dir_item,dir_index) in directoryArr"
          :title="dir_item.title"
          :link="dir_item.url"
          is-link>
    </cell>
  </div>
</template>
<script>
  import director_list_list from '../../assets/js/director_list_list.js';
  export default director_list_list
</script>
