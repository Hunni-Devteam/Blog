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

.splash {
  position: fixed; left: 0; top: 0; z-index: 10; width: 100%; height: 100%; background-color: #2c2c2c; display: flex; justify-content: center; align-items: center;
  &.inactive {
    display: none;
  }
}
</style>