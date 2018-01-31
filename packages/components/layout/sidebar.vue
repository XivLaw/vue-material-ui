<template>
  <aside id="sidebar">
    <div class="mt-profile" :style="{backgroundImage: `url(${headBg})`}">
      <span class="mt-profile-img">
          <img :src="headImg">
      </span>
      <span class="mt-profile-info">
          {{userName}}
      </span>
    </div>
    <ul class="mt-sidebar-menu">
      <li 
        v-for="(val, key) in menu" 
        :class="{
          'mt-sub-menu': val.haveChild, 
          'open': val.open, 
          'active': val.src == src
        }" 
      >
        <a @click="menuOpne(key)" v-if="val.haveChild">
          <span :class="['zmdi', `zmdi-${val.icon}`]"></span>
          {{val.name}}
        </a>
        <router-link v-else :to="val.src">
          <span :class="['zmdi', `zmdi-${val.icon}`]"></span>
          {{val.name}}
        </router-link>
        <ul 
          v-if="val.haveChild" 
          :style="{
            height: val.open ? `${Object.keys(val.childs).length * 40}px` : `0px`
          }"
        >
          <li v-for="(v, k) in val.childs" :class="{'active': src == v.src}">
              <router-link :to="v.src">{{v.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "MtSidebar",
  data() {
    return {
      menu: this.menuData,
      src: location.pathname
    };
  },
  props: {
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
    }
  },
  created() {
    for(let index in this.menu) {
      if(this.menu[index].haveChild) {
        for(let i in this.menu[index].childs) {
          if(this.src == this.menu[index].childs[i].src) {
            this.menu[index].open = true
          }
        }
      }
    }
  },
  methods: {
    menuOpne(key) {
      this.menu[key].open = ! this.menu[key].open;
    }
  },
  watch: {
    '$route' (to, from) {
      this.src = to.path
    }
  }
};
</script>