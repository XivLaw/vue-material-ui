<template>
  <div id="app">
    <mt-header logoStr="Material Admin"></mt-header>
    <mt-sidebar 
      :headImg="$store.state.headImg" 
      :headBg="$store.state.headBg"
      :menuData="$store.state.menuData" 
      userName="XivLaw"
    ></mt-sidebar>
    <mt-main :title="$route.name">
      <router-view></router-view>
    </mt-main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
