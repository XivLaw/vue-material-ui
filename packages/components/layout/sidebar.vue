<template>
  <aside id="sidebar" :class="{'sidebar-show': show}">
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
        <span v-if="val.haveChild">
          <a @click="menuOpne(key)">
            <span :class="['zmdi', `zmdi-${val.icon}`]"></span>
            {{val.name}}
          </a>
        </span>
        <span v-else @click="handleClick">
          <router-link :to="val.src">
            <span :class="['zmdi', `zmdi-${val.icon}`]"></span>
            {{val.name}}
          </router-link>
        </span>
        <ul 
          v-if="val.haveChild" 
          :style="{
            height: val.open ? `${Object.keys(val.childs).length * 40}px` : `0px`
          }"
        >
          <span @click="handleClick">
            <li v-for="(v, k) in val.childs" :class="{'active': src == v.src}">
              <router-link :to="v.src">{{v.name}}</router-link>
            </li>
          </span>
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
    show: {
      required: true,
      type: Boolean
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
    }
  },
  created() {
    for(let index in this.menu) {
      if(this.menu[index].haveChild) {
        for(let i in this.menu[index].childs) {
          if(this.src == this.menu[index].childs[i].src) {
            this.menu[index].open = true;
          }
        }
      }
    }
  },
  methods: {
    menuOpne(key) {
      this.menu[key].open = ! this.menu[key].open;
    },
    handleClick() {
      this.$parent.handleBurger(false);
    }
  },
  watch: {
    '$route' (to, from) {
      this.src = to.path;
    }
  }
};
</script>