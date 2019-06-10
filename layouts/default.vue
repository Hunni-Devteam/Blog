<template>
  <div id="layout">
    <div class="splash" v-bind:class="{ 'inactive': !showSplash }" @dblclick="showSplash = false">
      <div style="width: 100%; height: 50px;">
        <div style="display: inline-block; color: #fff; font-size: 42px;">Hunni.Devteam</div>
      </div>
    </div>
    <app-navigation></app-navigation>
    <nuxt/>
  </div>
</template>

<script type="text/javascript">
import AppNavigation from '@/components/AppNavigation'

export default {
  components: { AppNavigation },
  data () {
    return {
      showSplash: false
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import 'normalize.css';

* {
  letter-spacing: -0.12px;
}

ul, ol { list-style: none; margin: 0; padding: 0; }

div, header, nav, main, section, article, footer, aside {
  position: relative;
  box-sizing: border-box;
}

#layout {
  display: flex;
  min-height: 100vh;
}

#disqus_thread {
  padding: 32px;
}

.splash {
  position: fixed; left: 0; top: 0; z-index: 10; width: 100%; height: 100%; background-color: #2c2c2c; display: flex; justify-content: center; align-items: center;
  &.inactive {
    display: none;
  }
}

.page-content-wrapper {
  flex: 1; background-color: #e9e9e9;
}

.bg-white {
  background-color: #fff;
}
.article-viewer {
  margin: 24px;
  .tui-editor-contents {
    color: #333;
    p {
      color: #333;
      font-size: 15px;
    }
  }
}
</style>