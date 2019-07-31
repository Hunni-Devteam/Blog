<template>
  <article class="article-wrapper">
    <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
      <div class="article-viewer">
        <tui-viewer value="
``` javascript
console.log('test')
```
test
lroem
" />
      </div>
    <!-- Disqus thread -->
    <disqus-thread :src="'https://hunni-devteam-1.disqus.com/embed.js'"></disqus-thread>
  </article>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        created_at : '2019-05-23 21:30:00',
        title: 'Laravel 쿼리 빌더 사용으로 인한 MSSQL 성능 이슈',
        description: '컬럼 타입 강제 캐스팅으로 인해 인덱스를 타지 않았다.',
        tags: ['web-backend', 'laravel', 'perfomance', 'issue'],
        src: '/article/development/laravel-query-builder-causes-mssql-perfomance-issue',
        image: '/laravel-logo.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>