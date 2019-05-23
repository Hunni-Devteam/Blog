<template>
  <div>   
    <div id="title"
      :style="{ 'background-image': 'url('+image+')'}" 
      style="height: 320px; background-position: center; background-size: cover;">
    </div>
    <div style="margin: 24px">
      <h1 style="font-size: 24px; margin: 0;">
        {{ title }}
        <span style="float: right; font-weight: normal; font-size: 15px; line-height: 24px;">{{ createdAt }}</span>
      </h1>
      <div style="margin: 12px 0; width: calc(100% - 5px); height: 2px; background: #666;"></div>
      <h2 style="margin: 0; font-size: 18px; font-weight: normal;">{{ description }}</h2>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    }
  }
}
</script>