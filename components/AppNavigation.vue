<template>
  <nav class="main-navigation" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <div style="color: #f9f9f9; text-align: center; margin-bottom: 56px; margin-top: 48px;">
      <div @click="$router.push('/')" style="display: inline-block; margin-bottom: 8px; font-size: 30px; letter-spacing: 0.12px; cursor: pointer;">Hunni.Devteam</div><!--
   --><br>
      <span class="catchphrase" style="font-size: 17px; color: #d9d9d9;">Own the day, own your life</span>
    </div>
    <ul style="margin-bottom: 56px; font-size: 18px; color: #e9e9e9; width: 100%;">
      <li style="line-height: 48px; margin: 0px 56px;" @click="$router.push('/about')">
        <!-- <font-awesome-icon :icon="['fal', 'user-secret']"></font-awesome-icon> -->
        <span>About</span>
      </li>
      <li style="line-height: 48px; margin: 0px 56px;">
        <span>Development Archive</span>
        <ul style="line-height: 28px; font-size: 14px; color: #b9b9b9;">
          <li><span>- Web Frontend</span></li>
          <li><span>- Web Backend</span></li>
          <li><span>- API Document</span></li>
          <li><span>- Algorithm</span></li>
          <li><span>- Development Tip</span></li>
          <li><span>- Language Spec</span></li>
          <li><span>- Issues</span></li>
          <li><span>- DevOps</span></li>
        </ul>
      </li>
      <li style="line-height: 48px; margin: 0px 56px;">Life Archive</li>
      <li style="line-height: 48px; margin: 0px 56px;">Resume</li>
    </ul>
    <div style="color: #9c9c9c; font-size: 18px;">Twitter / Facebook / Google</div>
    <div style="flex: 1;"></div>
  </nav>
</template>

<style lang="scss">
  nav.main-navigation {
    width: 320px;
    background-color: #292929;
    li {
      span { cursor: pointer; }
    }
  }
</style>

<script type="text/javascript">
  export default {
    mounted () {
      console.log('AppNavigation Mounted')
      console.log(this.$store.getters.pageShortcuts)
    },
    methods: {}
  }
</script>