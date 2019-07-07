<template>
  <div class="page-content-wrapper">
    <div class="bg-white" style="margin: 24px;">
      <h1 style="font-weight: normal;">Recently Posted</h1>
      <hr>
      <div @click="$router.push(pageShortcut.src)" v-for="pageShortcut in $store.getters.pageShortcuts" :key="pageShortcut.created_at" style="cursor: pointer; font-size: 16px; padding: 16px;">
        <div style="display: flex;">          
          <div>
            <div style="margin-bottom: 4px;"><span style="font-size: 24px;">{{ pageShortcut.title }}</span></div>
            {{ pageShortcut.description }}
          </div>
          <div style="flex: 1"></div>
          <div>
            {{ pageShortcut.created_at }}
          </div>
        </div>
        <div style="margin-top: 8px;">
          <span style="padding: 3px 6px; margin: 2px; background-color: #6c6c6c; color: #fff; font-size: 13px; border-radius: 3px;" v-for="tag in pageShortcut.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { }
</script>

<style>
</style>

