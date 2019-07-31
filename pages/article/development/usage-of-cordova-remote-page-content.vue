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
        created_at : '2019-05-24 18:00:00',
        title: 'Cordova-Based SPA에 핫 리로딩 적용하기',
        description: 'config.xml - content 태그 값 변경으로 손쉽게 적용할 수 있어요.',
        tags: ['web-frontend', 'cordova', 'vue', 'development-tip'],
        src: '/article/development/usage-of-cordova-remote-page-content',
        image: '/laravel-logo.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>