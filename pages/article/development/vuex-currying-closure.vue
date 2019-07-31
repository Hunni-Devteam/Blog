<template>
  <article class="article-wrapper">
    <article-intro :image="image" :title="title" :description="description" :createdAt="created_at"></article-intro>
      <div class="article-viewer">
        <tui-viewer value="
# Vuex, 커링, 클로저.
Vuex로 원하는 기능을 구현하면서, 알게 모르게 써오던 개념들을 정리하기 위해 적게 되었습니다.

사실 아래 예제가 잘 안 읽혀서 적었습니다(...)
주석은 해당 예제를 ES5로 풀어 쓴 코드입니다.
```javascript
getters: {
  /*
    // getTodoById: function(state, id) {} 를 커링  
    getTodoById: function(state) {
      return function (id) {
        // 클로저 - 부모 스코프 매개변수를 끌고 옴
        return state.todos.find(todo => todo.id === id)
      }
  }
  */
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
```
위 예제에서 다루는 커링과 클로저가 이번 글의 핵심 내용입니다.


## 클로저
Vuex Getter에 인자를 넘겨 conditional 하게 state 를 가져올 때 **부모 스코프의 매개변수를 참조**하면서 **클로저**를 사용하게 됩니다.

## 커링
수학과 컴퓨터 과학에서 커링이란, **다중 인수를 갖는 함수를 단일 인수를 갖는 함수들의 함수열로 바꾸는 것**이라고 합니다.

두 개의 인수가 한 번에 들어오지 않을 때(코루틴? 의존성 주입?) 유용하게 쓸 수 있습니다.

아래 예제에서 커링과 클로저를 어떻게 활용하는 지 확인해 봅시다.

## 예시
```javascript
// 작성된 getters (Vuex Module)
getters: {
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
// Vuex 내부 동작 (Getter 인자에 Vuex Store의 state 속성 주입)
// 위 예제로 대입하면, prop = 'findStoreByStoreId'
Store.getters[prop] = Store.state.getters[prop](Vuex.store.state)
```

Vuex 공식 문서의 예제입니다.
todo를 todoId로 찾는 Getter 함수를 작성했네요.

예시를 보면, (state, testId) 두 개의 파라미터를 동시에 입력받지 않고
**Vuex에서 state를 먼저 주입**받기 위해
getters.test() 의 첫 호출 시에는 state만 매개변수로 받아
**storeId 를 인자로 받고, 클로저 변수인 state를 가진 함수로 커링**하고 있습니다.

예제 아래의 주석은 Vuex에서 state 속성을 주입하는 방식을 예상해 적어봤습니다.
(Vuex Getter 주입 소스를 뜯어본 건 아니라 정확하지 않아요)

## 회고
화살표 함수를 두 개 이어놓은 문법을 보고 처음에 뇌정지가 온 게 화근이었습니다.
글을 쓰면서 함수형 프로그래밍 기법을 어떻게 활용하고 있었는 지 돌아볼 수 있었어요.
기회가 된다면 실무에서 Map / Filter / Reduce 등의 함수형 프로그래밍 인터페이스를 어떻게 활용하는 지 다뤄보고 싶네요 :)

> ex) conditional 하게 state 를 가져올 때

본문에 위처럼 영단어를 난잡하게 섞어 써서 가독성이 떨어질 것 같습니다.
한글로 더 깔끔하게 작성할 수 있었으면 좋겠어요.


## 참고 자료
[https://vuex.vuejs.org/guide/getters.html#method-style-access](https://vuex.vuejs.org/guide/getters.html#method-style-access)
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
        created_at : '2019-07-07 15:40:00',
        title: 'Vuex, 커링, 클로저.',
        description: '알게 모르게 써오던 개념 정리',
        tags: ['web-frontend', 'vue', 'development-tip', 'ES6', 'functional-programming'],
        src: '/article/development/vuex-currying-closure',
        image: '/laravel-logo.png'
      }
    },
    mounted () {
      this.$store.commit('setPageData', this.$data)
    }
  }
</script>