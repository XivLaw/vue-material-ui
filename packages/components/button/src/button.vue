<template>
  <button 
    class="mt-button"
    @click="handleClick"
    @mousedown="shadowFadeIn"
    @mouseup="shadowFadeOut"
    v-bind="$props"
    :class="{
      [`mt-button-${size}`]: size,
      [`mt-button-${buttonType}`]: buttonType,
      [`bgm-${bg}`]: bg,
      'mt-button-text': $slots.default,
      'mt-button-round': isRound,
      'mt-button-down': shadowShow
    }"
  >
    <i v-if="icon" :class="['zmdi', `zmdi-${icon}`]"></i>
    <slot v-if="!isRound"></slot>
    <span class="mt-button-shadow" :style="{top: `${shadowTop}px`, left: `${shadowLeft}px`}"></span>
  </button>
</template>

<script>
  export default {
    name: 'MtButton',
    data() {
      return {
        shadowShow: false,
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
      handleClick(event) {
        this.$emit('click', event);
      },
      shadowFadeIn(event) {
        this.shadowTop = event.layerY - 50
        this.shadowLeft = event.layerX - 50
        this.shadowShow = true
      },
      shadowFadeOut() {
        this.shadowShow = false
      }
    }
  }
</script>
<style scoped>
  .mt-button {
    position: relative;
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
  .mt-button .mt-button-shadow {
    position: absolute;
    display: block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    content: "";
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition: transform;
    -o-transition: transform;
    transition: transform;
    -webkit-transition-duration: .8s;
    transition-duration: .8s;
    -webkit-transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .mt-button.mt-button-down .mt-button-shadow {
    -webkit-transform: scale(5);
    -ms-transform: scale(5);
    -o-transform: scale(5);
    transform: scale(5);
  }
  .mt-button.mt-button-round {
    border-radius: 50%;
    width: 40px;
    line-height: 42px;
    height: 40px;
    padding: 0;
    text-align: center;
  }
  .mt-button.mt-button-large {
    padding: 10px 16px;
    font-size: 17px;
    line-height: 1.3333333;
    border-radius: 2px;
  }
  .mt-button.mt-button-small {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 2px;
  }
  .mt-button.mt-button-xsmall {
    padding: 2px 5px;
    font-size: 11px;
    line-height: 1.5;
    border-radius: 2px;
  }
  .mt-button[class*=bgm-],.mt-button-info,.mt-button-primary,.mt-button-success,.mt-button-warning,.mt-button-danger {
    color: #FFFFFF;
  }
  .mt-button-info {
    background-color: #00BCD4;
  }
  .mt-button-primary {
    background-color: #2196F3;
  }
  .mt-button-success {
    background-color: #4CAF50;
  }
  .mt-button-warning {
    background-color: #FF9800;
  }
  .mt-button-danger {
    background-color: #F44336;
  }
  .mt-button[disabled] {
    cursor: not-allowed;
    opacity: .65;
  }
  .mt-button-text>.zmdi {
    font-size: 15px;
    vertical-align: top;
    display: inline-block;
    margin-top: 2px;
    line-height: 100%;
    margin-right: 5px;
  }
  .mt-button-round .zmdi {
    font-size: 17px;
  }
</style>