<template>
  <header id="header">
    <div class="mt-burger" :class="{'mt-burger-click':burgerOpen}"  @click="burgerClick">
      <span class="mt-line-top"></span>
      <span class="mt-line-center"></span>
      <span class="mt-line-bottom"></span>
    </div>
    <div class="mt-logo">
      <router-link to="/">
          {{logoStr}}
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "MtHeader",
  data() {
    return {
      burgerOpen: false
    };
  },
  props: {
    logoStr: {
      required: true,
      type: String
    }
  },
  methods: {
    burgerClick() {
      this.burgerOpen = !this.burgerOpen;
    }
  },
  watch: {
    burgerOpen(curVal, oldVal) {
      let el = document.querySelector("#sidebar");
      if (curVal && el) {
        el.classList.add("sidebar-show");
      } else {
        el.classList.remove("sidebar-show");
      }
    }
  }
};
</script>

<style scoped lang="less">
#header {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  user-select: none;
  position: fixed;
  z-index: 11;
  min-height: 70px;
  width: 100%;
  left: 0;
  top: 0;
  padding: 17px 20px;
  background-color: #2196f3;
  div {
    float: left;
  }
  .mt-burger {
    position: relative;
    width: 18px;
    height: 12px;
    margin: 12px 20px 12px 15px;
    -webkit-transition: all;
    -o-transition: all;
    transition: all;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    &.mt-burger-click {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      .mt-line-top {
        width: 12px;
        -webkit-transform: translateX(8px) translateY(1px) rotate(45deg);
        transform: translateX(8px) translateY(1px) rotate(45deg);
      }
      .mt-line-center {
        top: 5px;
      }
      .mt-line-bottom {
        width: 12px;
        -webkit-transform: translateX(8px) translateY(-1px) rotate(-45deg);
        transform: translateX(8px) translateY(-1px) rotate(-45deg);
      }
    }
    span {
      position: absolute;
      display: block;
      width: 18px;
      height: 2px;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      background-color: #fff;
      &.mt-line-top {
        top: 0px;
      }
      &.mt-line-center {
        top: 5px;
      }
      &.mt-line-bottom {
        top: 10px;
      }
    }
  }
  .mt-logo {
    padding: 7px 10px;
    text-transform: uppercase;
    font-size: 16px;
    a {
      color: #ffffff;
    }
  }
}
@media all {
  .mt-burger {
    display: none;
  }
}
@media (max-width: 1279px) {
  .mt-burger {
    display: block;
  }
}
@media (max-width: 767px) {
  #header {
      padding: 17px 8px;
  }
}
</style>