<template>
  <div id="post-navigator">
    <div id="article-navigator" class="container" style="display: flex;">
      <div v-if="$store.getters.prevPage.src" @click="$router.push($store.getters.prevPage.src)" style="cursor: pointer; font-size: 14px;">
        <div style="display: flex; justify-content: center; align-items: center;">
          <div style="font-weight: bold; font-size: 24px; margin-right: 8px;">&lt;</div>
          <div style="flex: 1">
            <div><b style="line-height: 24px;">이전 글</b></div>
            {{ $store.getters.prevPage.title }}
          </div>
        </div>
      </div>
      <div style="flex: 1; margin: 0px 4px;"></div>
      <div v-if="$store.getters.nextPage.src" @click="$router.push($store.getters.nextPage.src)" style="cursor: pointer; font-size: 14px; text-align: right;">
        <div style="display: flex; justify-content: center; align-items: center;">
          <div style="flex: 1">
            <div><b style="line-height: 24px;">다음 글</b></div>
            {{ $store.getters.nextPage.title }}
          </div>
          <div style="font-weight: bold; font-size: 24px; margin-left: 8px;">&gt;</div>
        </div>
      </div>
    </div>
    <!-- <div id="related-aritcles" class="container">
      <b>관련있는 글</b>
    </div> -->
  </div>
</template>