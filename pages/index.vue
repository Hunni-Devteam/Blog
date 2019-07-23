<template>
  <div class="page-content-wrapper">
    <div class="bg-white">
      <div v-if="pageShortcut.tags[0] != 'draft'" @click="$router.push(pageShortcut.src)" v-for="pageShortcut in $store.getters.pageShortcuts" :key="pageShortcut.title" style="display: inline-block; width: 25%; cursor: pointer; font-size: 16px; padding: 16px; vertical-align: top;">
        <div :style="{ 'background-image': 'url('+pageShortcut.image+')' }" style="height: 154px; background-size: cover; background-position: center;"></div>
        <div style="margin-bottom: 4px;"><span style="font-size: 16px;">{{ pageShortcut.title }}</span></div>
        <div style="font-size: 14px;">{{ pageShortcut.description }}</div>
        <div>{{ $moment(pageShortcut.created_at).format('YYYY-MM-DD') }}</div>
        <div style="margin-top: 8px;">
          <span style="display: inline-block; padding: 3px 6px; margin: 2px; background-color: #6c6c6c; color: #fff; font-size: 13px; border-radius: 3px;" v-for="tag in pageShortcut.tags" :key="tag">{{ tag }}</span>
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

