<template>
  <button 
    class="mt-button"
    @click="handleClick"
    @mousedown.left="shadowFadeIn"
    @touch="handleClick"
    @touchstart="shadowFadeIn"
    @touchend="shadowFadeOut"
    v-bind="$props"
    :class="{
      [`mt-button-${size}`]: size,
      [`mt-button-${buttonType}`]: buttonType,
      [`bgm-${bg}`]: bg,
      'mt-button-text': $slots.default && !isRound,
      'mt-button-round': isRound,
      'mt-button-down': shadowShow
    }"
  >
    <i v-if="icon" :class="['zmdi', `zmdi-${icon}`]"></i>
    <slot v-if="!isRound"></slot>
    <span 
      class="mt-button-shadow"
      :style="{
        top: `${shadowTop}px`, 
        left: `${shadowLeft}px`,
        opacity: shadowOpacity
      }"
    ></span>
  </button>
</template>

<script>
  export default {
    name: 'MtButton',
    data() {
      return {
        shadowShow: false,
        shadowOpacity: 0,
        shadowTop: 0,
        shadowLeft: 0
      }
    },
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      autofocus: Boolean,
      size: String,
      icon: String,
      buttonType: String,
      isRound: Boolean,
      bg: {
        type: String,
        validator (val) {
          var colorStr = 'black,brown,pink,red,blue,purple,deeppurple,lightblue,cyan,teal,green,lightgreen,lime,yellow,amber,orange,deeporange,gray,bluegray,indigo'
          return colorStr.indexOf(val) >= 0 
        }
      }
    },
    methods: {
      handleClick() {
        this.shadowFadeIn()
        setTimeout(() => {
          this.shadowOpacity = 0
          setTimeout(() => {
            this.shadowShow = false
          }, 300)
        }, 300)
        this.$emit('click');
      },
      shadowFadeIn() {
        this.shadowTop = event.layerY - 50
        this.shadowLeft = event.layerX - 50
        this.shadowOpacity = 1
        this.shadowShow = true
      },
      shadowFadeOut() {
        this.shadowOpacity = 0
        this.shadowShow = false
      }
    }
  }
</script>