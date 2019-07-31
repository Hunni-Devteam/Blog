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
        title: 'Cordova + Vue.js 연동하기',
        description: 'Vue CLI 3 너무 편해요!',
        tags: ['web-frontend', 'cordova', 'vue', 'development-tip'],
        src: '/article/development/use-cordova-with-vue-cli-3',
        image: '/laravel-logo.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>