<template>
  <div class="page-content-wrapper">
    <div class="bg-white" style="text-align: center;">
      <div v-if="pageShortcut.tags[0] != 'draft'" @click="$router.push(pageShortcut.src)" v-for="pageShortcut in $store.getters.pageShortcuts" :key="pageShortcut.title" style="display: inline-block; width: 300px; cursor: pointer; font-size: 16px; padding: 8px; vertical-align: top;">
        <div :style="{ 'background-image': 'url('+pageShortcut.image+')' }" style="height: 154px; background-size: cover; background-position: center;"></div>
        <div style="line-height: 32px;"><b style="font-size: 14px;">{{ pageShortcut.title }}</b></div>
        <div style="font-size: 14px; line-height: 24px;">{{ pageShortcut.description }}</div>
        <div style="font-size: 13px;">{{ $moment(pageShortcut.created_at).format('YYYY-MM-DD') }}</div>
        <div style="margin-top: 8px;">
          <span style="display: inline-block; padding: 3px 6px; margin: 2px; background-color: #6c6c6c; color: #fff; font-size: 13px; border-radius: 3px;" v-for="tag in pageShortcut.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>