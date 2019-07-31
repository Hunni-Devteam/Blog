<template>
  <article class="article-wrapper">
    <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
      <div class="article-viewer">
        <tui-viewer value="
# cordova-plugin-firebase 오류 기록 - Part 1

**2편에서 오류 해결방법과 원인을 다룹니다.**
Cordova Plugin은 Android / iOS 등의 모바일 OS API를 자바스크립트로 호출할 수 있도록 돕는 인터페이스를 제공합니다.
따라서 OS 업데이트로 인한 주요 API 변경이나, 플러그인 간 의존성 충돌로 오류가 생기는 경우가 잦습니다.
이 글은 cordova-plugin-firebase 플러그인 이슈를 다룹니다.

에러 메시지 및 추적 내용
-
Execution failed for task ':app:processReleaseResources'.
> Failed to execute aapt

> org.gradle.internal.exceptions.LocationAwareException

> \platforms\android\app\libs', not found file or directory

> cannot find symbol
import android.support.v4.app.NotificationManagerCompat;

1. Target SDK 27일 때 aapt 오류 발생
2. Target SDK 28로 변경 후 NotificationManagerCompat 못 찾는 오류 발생
3. Cordova CLI 및 Android 플랫폼 다운그레이드 후 같은 오류 발생
4. Android Studio에서 직접 빌드 실패
5. Cordova Platform 삭제 - cordova-plugin-firebase 삭제 후 Platform만 재설치
6. 빌드 성공
7. cordova-plugin-firebase 재설치 후 빌드 실패
8. cordova-plugin-firebase 삭제 후 Clean Build 확보.

개발 환경
-
[CLI] cordova@7^ / cordova@8^
[Platform] cordova-android@7^ / cordova-android@8^(Latest)  


임시 조치
-
Firebase Plugin 삭제 후 빌드 환경부터 정상화하고,
나머지 기능부터 개발하기로 했습니다.
```
' 삭제
cordova platform rm android --force
cordova plugin rm cordova-plugin-firebase --force
' 재설치
cordova platform add android@latest (190621 기준 8.0.0)
' 빌드
cordova run android
```

유효하지 않았던 조치
-
build.gradle 
> defaultTargetSdkVersion 27 => 28 변경
> defaultCompileSdkVersion 27 => 28 변경
> defaultBuildToolsVersion 27.0.3 => 28.0.3 변경

app/src/main/AndroidManifest.xml
> TargetSDKVersion 27 => 28 변경

project.properties 
> target android-27 => android-28 변경

cordovaLib/project.properties
> target android-27 => android-28 변경

etc...

회고
-
플러그인 의존성 터지면 하루가 날아갑니다.
진행 중인 프로젝트의 개발 일정이 상당히 촉박해서 디버깅에 많은 신경을 쓸 수 없는 상태였습니다.
따라서 빠르게 대처하려다 더 많은 오류가 발생해, 정상적인 테스트 환경을 확보하는 데에 어려움을 겪었습니다.

개선안
-
- ~~플러그인 잘 찾아 씁시다 ㅜㅜ~~
- 비슷한 문제가 발생했을 때 바로 대처할 수 있도록 **디버그 로그 작성 및 공유를 습관화**합시다.
- 당황해도 디버깅 속도가 느는 건 아니므로 **차분하게 차 한잔 마시고 조치내역을 기록**합시다.
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
        created_at : '2019-07-15 08:54:00',
        title: 'cordova-plugin-firebase 오류 기록 - Part 1',
        description: '플랫폼 의존적인 플러그인 오류 찾기',
        tags: ['cordova', 'android', 'issue'],
        src: '/article/development/cordova-plugin-firebase-issue-part1',
        image: '/disqus-cover.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>