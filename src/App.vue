<template>
  <div id="app">
    <mt-admin
      logoStr="Material Admin"
      :headImg="$store.state.headImg" 
      :headBg="$store.state.headBg"
      :menuData="$store.state.menuData" 
      userName="XivLaw"
      :title="$route.name"
    ></mt-admin>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>