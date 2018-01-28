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
    <i v-if="icon" :class="['zmdi', `zmdi-${icon}`]"></i>
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
  .mt-button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 13px;
    line-height: 1.42857143;
    border:none;
    border-radius: 2px;
    color: #000000;
    background-color: #FFFFFF;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,.16), 0 2px 10px rgba(0,0,0,.12);
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mt-button[class*=bgm-] {
    color: #FFFFFF;
  }
</style>