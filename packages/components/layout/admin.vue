<template>
  <div>
    <mt-header 
      logoStr="Material Admin"
      :open="sidebarShow"
    ></mt-header>
    <mt-sidebar 
      :headImg="headImg" 
      :headBg="headBg"
      :menuData="menuData" 
      :userName="userName"
      :show="sidebarShow"
    ></mt-sidebar>
    <mt-main :title="title">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </mt-main>
  </div>
</template>

<script>
  import MtHeader from './header';
  import MtSidebar from './sidebar';
  import MtMain from './main';

  export default {
    name: 'MtAdmin',
    components: {
      MtHeader,
      MtSidebar,
      MtMain
    },
    data() {
      return {
        sidebarShow: false
      };
    },
    props: {
      logoStr: {
        required: true,
        type: String
      },
      userName: {
        required: true,
        type: String
      },
      headImg: {
        required: true,
        type: String
      },
      headBg: {
        required: true,
        type: String
      },
      menuData: {
        required: true,
        type: Object
      },
      title: {
        required: true,
        type: String
      }
    },
    methods: {
      handleBurger(val) {
        this.sidebarShow = val;
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>