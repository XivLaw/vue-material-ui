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
          'active': src == val.src
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

<style scoped>
#sidebar {
  position: fixed;
  background: #fff;
  width: 268px;
  height: calc(100% - 70px);
  top: 70px;
  left: 0;
  transition: all;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  z-index: 10;
  overflow-y: auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
#sidebar.sidebar-show {
  left: 0px;
}
.mt-profile {
  height: 129px;
  margin-bottom: 5px;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
.mt-profile span {
  display: block;
}
.mt-profile-img {
  padding: 12px;
}
.mt-profile-img img {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.14);
  box-sizing: content-box;
}
.mt-profile-info {
  position: relative;
  padding: 7px 14px;
  margin-top: 20px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.37);
}
.mt-sidebar-menu {
  list-style: none;
  padding-left: 0;
  margin: 20px 0 0;
}
.mt-sidebar-menu li a {
  position: relative;
  padding: 14px 20px 14px 65px;
  display: block;
  font-weight: 500;
  color: #4c4c4c;
  cursor: pointer;
  -webkit-transition: color;
  -o-transition: color;
  transition: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.mt-sidebar-menu li a span {
  position: absolute;
  left: 25px;
  font-size: 20px;
  top: 0;
  width: 25px;
  text-align: center;
  padding: 13px 0;
}
.mt-sub-menu a:after,.mt-sub-menu a:before {
  position: absolute;
  top: 50%;
  margin-top: -11px;
  font-family: Material-Design-Iconic-Font;
  font-size: 17px;
  right: 15px;
  -webkit-transition: all;
  -o-transition: all;
  transition: all;
  -webkit-transition-duration: 250ms;
  transition-duration: 250ms;
}
.mt-sub-menu>a:after{
  content: "\f273";
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}
.mt-sub-menu>a:before{
  content: "\f278";
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.mt-sub-menu.open>a:after {
  content: "\f273";
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.mt-sub-menu.open>a:before {
  content: "\f278";
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}
.mt-sidebar-menu>li.active>a,.mt-sidebar-menu>li>a:hover{
  background-color: #f4f4f4;
}
.mt-sidebar-menu .active>a,.mt-sidebar-menu li>a:hover {
  color: #262626;
}
.mt-sub-menu ul {
  overflow: hidden;
  list-style: none;
  padding: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: all;
  -o-transition: all;
  transition: all;
  -webkit-transition-duration: 250ms;
  transition-duration: 250ms;
}
.mt-sub-menu ul a {
  padding: 14px 20px 8px 65px;
  color: #989898;
}
@media (max-width: 1279px) {
  #sidebar {
    left: -288px;
    box-shadow: 0 0 20px rgba(14,18,21,.38);
  }
}
</style>