<template>
  <div id="app">
    <mt-header logoStr="Material Admin"></mt-header>
    <mt-sidebar 
      :headImg="this.$store.state.headImg" 
      :headBg="this.$store.state.headBg"
      :menuData="this.$store.state.menuData" 
      userName="XivLaw"
    ></mt-sidebar>
    <mt-main title="Home">
      <div class="col-sm-12"></div>
    </mt-main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
