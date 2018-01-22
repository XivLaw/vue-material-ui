<template>
  <div id="app">
    <router-view/>
    {{$route.state}}
    <mt-header logoStr="Material Admin"></mt-header>
    <mt-sidebar 
      :headImg="this.$store.state.headImg" 
      :headBg="this.$store.state.headBg"
      :menuData="this.$store.state.menuData" 
      userName="XivLaw"
    ></mt-sidebar>
  </div>
</template>

<script>
  

  export default {
    name: 'app'
  }
</script>
