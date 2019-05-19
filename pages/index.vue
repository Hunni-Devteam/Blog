<template>
  <div class="page-content-wrapper">
    <div class="bg-white" style="margin: 24px;">
      <h1>Recent Posts</h1>
      <div @click="$router.push(pageShortcut.src)" v-for="pageShortcut in $store.getters.pageShortcuts" :key="pageShortcut.created_at" style="cursor: pointer; display: flex; font-size: 16px;">
        <div>
          <b style="font-size: 20px">{{ pageShortcut.title }}</b><br>
          {{ pageShortcut.description }}
        </div>
        <div style="flex: 1"></div>
        <div>
          {{ pageShortcut.created_at }}
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

