<template>
  <article class="article-wrapper">
    <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
      <div class="article-viewer">
        <tui-viewer value="
# cordova-plugin-firebase 오류 기록 - Part 2

오류를 추적하면서 알아낸 내용을 이어 적습니다.
이번 글부터는 작성 편의를 위해 존칭을 생략합니다.. :>

원인 분석
-
https://firebase.google.com/support/release-notes/android#update_-_june_17_2019
위의 Firebase SDK 업데이트 내용을 보면 Android Support 패키지를  Jetpack(AndroidX) 로 마이그레이션했다는 내용이 있다.
따라서 최신 Firebase SDK를 사용하게 되면 Jetpack 사용이 강제된단 뜻인데,  만약 플러그인에서 Firebase 의존성을 느슨하게 체크했다면 충분히 문제가 될 수 있다.
그래서 해당 플러그인 의존성을 확인해 보니 firebase-auth 패키지가 항상 최신 버전을 향하도록 되어있던 것이다.

위 글을 자세히 보면 Authentication Version 18.0.0 부터 변경점이 반영된다고 했다.
이제 의존성을 살펴보자.

> cordova-plugin-firebase/src/android/build.gradle - line 20
```
dependencies {
    compile 'me.leolin:ShortcutBadger:1.1.4@aar'
    // 항상 최신 버전으로 유지?
    compile 'com.google.firebase:firebase-auth:+'
    compile('com.crashlytics.sdk.android:crashlytics:2.9.1@aar') {
       transitive = true
    }
}
```
gradle 의존성 정의 내용을 보니, firebase-auth 라이브러리를 항상 최신 버전으로 유지하게(com.google.firebase:firebase-auth:+) 해 놨다.
그렇다면 소스 코드도 같이 살펴보자.
> cordova-plugin-firebase/src/android/firebasePlugin.java - line 9
```
 import android.support.v4.app.NotificationManagerCompat;
 ```
AndroidX 사용하도록 소스를 고치거나, firebase-auth 다운그레이드가 필요한 상태였지만 아직 반영되지 않은 상태였다.

직접 소스를 고치거나, 의존성 오류를 방지할 필요가 있어 구글링을 더 해봤다.

조치
-
해당 플러그인의 Github 저장소 - issues 탭에서 많은 내용을 얻었다.
댓글 내용을 참고해 수정하면 된다.

충돌 발생할 수 있는 플러그인 목록, 안정적인 버전 알려준 댓글
[https://github.com/arnesson/cordova-plugin-firebase/issues/1081#issuecomment-503041641](https://github.com/arnesson/cordova-plugin-firebase/issues/1081#issuecomment-503041641)
> Providing `17.1.1` for `firebase-iid` solves the dependency wild card issue.  
Providing `16.2.0` for `firebase-auth` solves double class present in the class path issue.

안정적인 버전으로 Dependency Replace 하는 스크립트
[https://github.com/arnesson/cordova-plugin-firebase/issues/1083#issuecomment-503224816](https://github.com/arnesson/cordova-plugin-firebase/issues/1083#issuecomment-503224816)

위 링크 내용대로 build-extras.gradle 스크립트 추가하고,
nodeJS 로 파일 복사해주는 hook 코드 작성하고
config.xml에서 after_prepare 훅에 해당 스크립트 실행하게 하면 오류 없이 동작한다.


회고
-
하이브리드 앱 개발은 두 번째지만, 네이티브 앱을 개발해본 적이 없으니 플랫폼 의존적인 이슈가 터졌을 때 당황하게 된다.

앞으로도 Cordova 생태계 또는 모바일 환경에서 개발을 계속하게 된다면, 네이티브 개발에 쓸 언어와 프레임워크(Kotlin, Swift, Cocoa 등) 공부도 적극적으로 할 필요가 있을 것 같다.
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
        created_at : '2019-07-15 08:57:00',
        title: 'cordova-plugin-firebase 오류 기록 - Part 2',
        description: '오류 내용 분석과 조치 방법 정리',
        tags: ['cordova', 'android', 'issue'],
        src: '/article/development/cordova-plugin-firebase-issue-part2',
        image: '/disqus-cover.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>