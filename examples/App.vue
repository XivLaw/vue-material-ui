<template>
  <div id="app">
    <router-view/>
    <mt-header logoStr="Material Admin"></mt-header>
    <mt-sidebar :headImg="headImg" :headBg="headBg"></mt-sidebar>
  </div>
</template>

<script>
  import headImg from './assets/head.jpg'
  import headBg from './assets/head-bg.jpg'

  export default {
    name: 'app',
    data() {
      return {
        headImg,
        headBg
      }
    },
  }
</script>
