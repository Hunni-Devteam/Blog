<template>
  <div>
    <!-- breadcrumb -->
    <div style="height: 48px; line-height: 48px; background-color: #fff; margin: 0px 0px 24px 0px; padding: 0px 24px;">
      home / archive / development / disqus-comment-test
    </div>
    <div class="bg-white" style="margin: 0px 24px 24px 24px;">
      <article>
        <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
        <tui-viewer
          class="article-viewer"
          value="
Disqus 연동 테스트 페이지입니다.
테스트 완료되면 마크다운도 사용해봅시다.

2019.05.23 - DisqusThread / ArticleIntro 컴포넌트 분리.

2019.05.23 - GFM Markdown Viewer 적용.
"/>
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
        created_at : '2019-05-20 03:30:00',
        title: 'Disqus 연동 테스트',
        description: 'Disqus 연동 테스트',
        tags: ['disqus', 'development'],
        src: '/archive/development/disqus-comment-test',
        image: '/disqus-cover.png'
      }
    }
  }
</script>