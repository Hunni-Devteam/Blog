<template>
  <article class="article-wrapper">
    <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
      <div class="article-viewer">
        <tui-viewer value="
# Disqus 연동 테스트
Disqus 연동 테스트 페이지입니다.
테스트 완료되면 마크다운도 사용해봅시다.

2019.05.23 - DisqusThread / ArticleIntro 컴포넌트 분리.

2019.05.23 - GFM Markdown Viewer 적용.
"/>
      </div>
    <!-- Disqus thread -->
    <disqus-thread :src="'https://hunni-devteam-1.disqus.com/embed.js'"></disqus-thread>
  </article>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        created_at : '2019-05-20 03:30:00',
        title: 'Disqus 연동 테스트',
        description: 'Disqus 연동 테스트',
        tags: ['disqus', 'blog-development'],
        src: '/article/development/disqus-comment-test',
        image: '/disqus-cover.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>