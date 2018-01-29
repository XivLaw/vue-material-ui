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
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </mt-main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
  .fade-enter-active,.fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
</style>