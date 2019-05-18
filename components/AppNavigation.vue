<template>
  <nav class="main-navigation" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <div style="color: #f9f9f9; text-align: center; margin-bottom: 56px; margin-top: 40px;">
      <div style="display: inline-block; margin-bottom: 8px; font-size: 30px; letter-spacing: 0.16px;">Hunni.Devteam</div><!--
   --><br>
      <span class="catchphrase" style="font-size: 17px; color: #d9d9d9;">Own the day, own your life</span>
    </div>
    <ul style="margin-bottom: 56px; font-size: 18px; color: #e9e9e9; width: 100%;">
      <li style="line-height: 48px; margin: 0px 56px;">
        <font-awesome-icon :icon="['fal', 'user-secret']"></font-awesome-icon> About</li>
      <li style="line-height: 48px; margin: 0px 56px;">
        Engineering Archive
        <ul style="line-height: 28px; font-size: 14px; color: #b9b9b9;">
          <li>- Web.Frontend</li>
          <li>- Web.Backend</li>
          <li>- Language Specs</li>
          <li>- API Documents</li>
          <li>- Issues</li>
          <li>- DevOps</li>
        </ul>
      </li>
      <li style="line-height: 48px; margin: 0px 56px;">Life Archive</li>
      <li style="line-height: 48px; margin: 0px 56px;">Resume</li>
    </ul>
    <div style="color: #9c9c9c; font-size: 18px;">Twitter / Facebook / Google</div>
    <div style="flex: 1;"></div>
  </nav>
</template>

<style type="text/css">
  .main-navigation {
    width: 320px;
    background-color: #2c2c2c;
  }
</style>

<script type="text/javascript">
  export default {
    mounted () {
      console.log('AppNavigation Mounted')
    },
    methods: {}
  }
</script>