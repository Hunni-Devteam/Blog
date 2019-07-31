<template>
  <div style="height: 48px; line-height: 48px; background-color: #fff; margin: 0px 0px 24px 0px; padding: 0px 24px;">
    <span v-for="(path, index) in $nuxt.$route.path.split('/')" :key="path">
      <span v-if="index == 0" @click="$router.push('/')">home</span>
      <span v-else>
        <span> / </span>
        <span>{{ path }}</span>
      </span>
    </span>
  </div>
</template>