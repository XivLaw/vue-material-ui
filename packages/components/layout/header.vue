<template>
  <header id="header">
    <div class="mt-burger" :class="{'mt-burger-click': open}"  @click="burgerClick">
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
  props: {
    logoStr: {
      required: true,
      type: String
    },
    open: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    burgerClick() {
      this.$parent.handleBurger(!this.open);
    }
  }
};
</script>