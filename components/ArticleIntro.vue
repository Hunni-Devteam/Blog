<template>
  <div>   
    <div id="title"
      :style="{ 'background-image': 'url('+image+')'}" 
      style="height: 320px; background-position: center; background-size: cover;">
    </div>
    <b>{{ createdAt ? $moment(createdAt).format('YYYY-MM-DD') : '' }}</b>
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