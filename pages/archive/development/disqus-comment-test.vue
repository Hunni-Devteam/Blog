<template>
  <div class="page-content-wrapper">
    <!-- breadcrumb -->
    <div style="height: 48px; line-height: 48px; background-color: #fff; margin: 0px 0px 24px 0px; padding: 0px 24px;">
      Home / Archive / Development / disqus-comment-test
    </div>
    <div class="bg-white" style="margin: 0px 24px 24px 24px;">
      <article>
        <div id="title" style="height: 320px; background-image: url('/disqus-cover.png'); background-position: center; background-size: cover;"></div>
        
        <div style="margin: 24px">
          <h1 style="font-size: 24px; margin: 0;">Disqus 연동 테스트</h1>
          <div style="margin: 12px 0; width: calc(100% - 5px); height: 2px; background: #666;"></div>
          <h2 style="margin: 0; font-size: 18px; font-weight: normal;">Disqus 연동 테스트</h2>
        </div>
        
        <section style="margin: 24px;">
          <p>
            Disqus 연동 테스트 페이지입니다.<br>
            테스트 완료되면 마크다운도 사용해봅시다.<br>
          </p>
        </section>
      </article>
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {

      }
    },
    mounted () {

      /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://hunni-devteam-1.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
    }
  }
</script>