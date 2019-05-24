<template>
  <div>
    <!-- breadcrumb -->
    <div style="height: 48px; line-height: 48px; background-color: #fff; margin: 0px 0px 24px 0px; padding: 0px 24px;">
      home / archive / development / usage-of-cordova-remote-page-content
    </div>
    <div class="bg-white" style="margin: 0px 24px 24px 24px;">
      <article>
        <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
        <tui-viewer
          class="article-viewer" 
          value="
``` javascript
console.log('test')
```
test
lroem
" />
      </article>
      <!-- Disqus thread -->
      <disqus-thread :src="'https://hunni-devteam-1.disqus.com/embed.js'"></disqus-thread>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        created_at : '2019-05-24 18:00:00',
        title: 'Cordova + Vue.js 연동하기',
        description: 'Vue CLI 3 너무 편해요!',
        tags: ['web-frontend', 'cordova', 'vue', 'development-tip'],
        src: '/archive/development/laravel',
        image: '/laravel-logo.png'
      }
    }
  }
</script>