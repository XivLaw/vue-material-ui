<template>
  <button 
    class="mt-button"
    @click="handleClick"
    v-bind="$props"
    :class="{
      [`mt-button-${size}`]: size,
      [`bgm-${bg}`]: bg
    }"
  >
    <i :class="['zmdi', `zmdi-${icon}`]"></i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'MtButton',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      autofocus: Boolean,
      size: String,
      icon: String,
      bg: {
        type: String,
        validator (val) {
          var colorStr = 'black,brown,pink,red,blue,purple,deeppurple,lightblue,cyan,teal,green,lightgreen,lime,yellow,amber,orange,deeporange,gray,bluegray,indigo'
          return colorStr.indexOf(val) >= 0 
        }
      }
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  }
</script>

<style scoped>

</style>