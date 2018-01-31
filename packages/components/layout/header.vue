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