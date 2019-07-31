<template>
  <div class="page-content-wrapper">
    <article-breadcrumb />
    <!-- <transition></transition> -->
    <router-view />
    <article-navigator />
  </div>
</template>

<script>
  import ArticleBreadcrumb from '@/components/ArticleBreadcrumb'
  import ArticleNavigator from '@/components/ArticleNavigator'

  export default {
    components: {
      'article-breadcrumb': ArticleBreadcrumb,
      'article-navigator': ArticleNavigator
    },
    watch: {
      $route () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="scss">
  .article-wrapper {
    background-color: #fff;
    margin: 0px 24px 24px 24px;
  }
</style>