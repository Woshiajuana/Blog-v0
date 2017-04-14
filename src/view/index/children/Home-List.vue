<template>
  <aritcle-item v-for="(article_item,article_index) in articleArr"
                :article_url="'#/details/1'+article_item.article_id"
                :article_type="article_item.article_type"
                :article_title="article_item.article_title"
                :article_time="article_item.article_time">
  </aritcle-item>
</template>
