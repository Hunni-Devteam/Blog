<template>
  <div id="layout">
    <app-intro v-if="showIntro"></app-intro>
    <app-navigation></app-navigation>
    <nuxt/>
  </div>
</template>

<script type="text/javascript">
import AppIntro from '@/components/AppIntro'
import AppNavigation from '@/components/AppNavigation'

export default {
  head () {
    return {
      title: this.$store.getters.currentPage.title ? this.$store.getters.currentPage.title : 'Hunni.Devteam',
      meta: [
        {
          hid: this.$store.getters.currentPage.created_at ? this.$store.getters.created_at : '',
          name: this.$store.getters.currentPage.title ? this.$store.getters.currentPage.title : 'Hunni.Devteam',
          content: this.$store.getters.currentPage.description ? this.$store.getters.currentPage.description : "Software Engineer, Hun Kang's Personal Blog"
        }
      ],
      titleTemplate: this.$store.getters.currentPage.title ? '%s - Hunni.Devteam' : 'Hunni.Devteam',
      htmlAttrs: {
        lang: 'ko'
      }
    }
  },
  components: { AppIntro, AppNavigation },
  data () {
    return {
      showIntro: true,
      appMounted: false,
    }
  },
  mounted () {
    if (this.showIntro) setTimeout(() => this.showIntro = false, 3400)
  },
  watch: {
    $route (currentRoute) {
      currentRoute.path.indexOf('archive') == -1 ? this.$store.commit('setPageData', {}) : null
    }
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

.container {
  margin: 24px;
}

.bg-white {
  background-color: #fff;
}

.article-viewer {
  margin: 24px;
  .tui-editor-contents {
    color: #333;
    h1 {
      font-weight: normal;
      line-height: 48px;
      border-bottom-width: 2px;
      border-bottom-style: solid;
    }
    p {
      color: #333;
      font-size: 14px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .36s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>