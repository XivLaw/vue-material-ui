<template>
  <div 
    class="mt-input-group clearfix" 
    :class="{
      [`mt-input-group-${inputSize}`]: inputSize, 
      [`mt-state-${state}`]: state
    }"
  >
    <span class="mt-input-icon-before" v-if="beforeIcon">
      <i :class="['zmdi', `zmdi-${beforeIcon}`]"></i>
    </span>
    <div class="mt-input-line" :class="{'mt-input-focus': focused,'mt-input-have': isFlag && haveText}">
        <input type="text" 
          class="mt-input"
          v-bind="$props"
          :placeholder="placeholderText"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInput"
          @change="handleChange"
          v-model="currentValue"
        >
        <label class="mt-input-lebel" v-if="isFlag">{{placeholder}}</label>
    </div>
    <small class="mt-input-tips" v-if="tipsText">{{tipsText}}</small>
    <span class="mt-input-icon-after" v-if="afterIcon">
      <i :class="['zmdi', `zmdi-${afterIcon}`]"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'MtInput',
    data() {
      return {
        currentValue: this.value,
        focused: false,
        haveText: false,
        placeholderText: ''
      }
    },
    props: {
      value: [String, Number],
      placeholder: String,
      name: String,
      form: String,
      id: String,
      maxlength: Number,
      minlength: Number,
      readonly: Boolean,
      autofocus: Boolean,
      disabled: Boolean,
      autoComplete: {
        type: String,
        default: 'off'
      },
      step: {},
      state: String,
      tipsText: String,
      inputSize: String,
      beforeIcon: String,
      afterIcon: String,
      isFlag: Boolean
    },
    mounted() {
      if(!this.isFlag) {
        this.placeholderText = this.placeholder
      }
      this.haveText = this.currentValue && this.currentValue != '' ? true : false
    },
    methods: {
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      },
      handleFocus(event) {
        if(this.readonly) {
          this.focused = false;
        }else {
          this.focused = true;
        }
        this.$emit('focus', event);
      },
      handleInput(event) {
        this.$emit('input', event.target.value);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      }
    },
    watch: {
      'value'(val) {
        this.currentValue = val
      },
      'currentValue'(val) {
        this.haveText = val != '' ? true : false
      },
      'placeholder'(val) {
        if(!this.isFlag) {
          this.placeholderText = this.placeholder
        }
      }
    }
  }
</script>

<style scoped>
  .mt-input-group{
    position: relative;
    display: table;
    width: 100%;
    border-collapse: separate;
    margin-bottom: 25px;
  }
  .mt-input-line {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 100%;
  }
  .mt-input-line:after, .mt-input-line:after {
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    content: "";
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all;
    -o-transition: all;
    transition: all;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
  }
  .mt-input-line:after {
    background: #2196F3;
  }
  .mt-state-success .mt-input-line:after{
    background: #67BD6A;
  }
  .mt-state-warning .mt-input-line:after{
    background: #FFA829;
  }
  .mt-state-error .mt-input-line:after{
    background: #F6675D;
  }
  .mt-input-focus:after,.mt-input-have:after {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .mt-input {
    display: block;
    padding: 0;
    width: 100%;
    height: 35px;
    border: 0;
    border-bottom: 1px solid #E0E0E0;
    background-color: transparent;
    font-size: 13px;
    line-height: 1.42857143;
    color: #000;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .mt-state-success .mt-input{
    border-color: #67BD6A;
  }
  .mt-state-warning .mt-input{
    border-color: #FFA829;
  }
  .mt-state-error .mt-input{
    border-color: #F6675D;
  }
  .mt-input-group-small .mt-input {
    height: 30px;
    line-height: 1.5;
    font-size: 12px;
  }
  .mt-input-group-large .mt-input {
    height: 40px;
    line-height: 1.3333333;
    font-size: 17px;
  }
  .mt-input-lebel {
      top: 6px;
      left: -1px;
      font-weight: 400;
      color: #959595;
      pointer-events: none;
      z-index: 0;
      white-space: nowrap;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: .2s;
      transition-duration: .2s;
      position: absolute;
  }
  .mt-input-focus .mt-input-lebel,.mt-input-have .mt-input-lebel {
    top: -18px;
    left: 0px;
    font-size: 11px;
  }
  .mt-input-icon-before,.mt-input-icon-after {
    display: table-cell;
    width: 1%;
    min-width: 42px;
    padding: 6px 12px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-bottom: 1px solid transparent;
    border-radius: 0;
  }
  .mt-input-icon-before>.zmdi,.mt-input-icon-after>.zmdi {
    position: relative;
    top: 3px;
  }
  .mt-input-group-small .mt-input-icon-before,.mt-input-group-small .mt-input-icon-after {
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  }
  .mt-input-group-large .mt-input-icon-before,.mt-input-group-large .mt-input-icon-after {
    height: 40px;
    padding: 10px 16px;
    font-size: 17px;
    line-height: 1.3333333;
  }
  .mt-input-tips {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #9E9E9E;
  }
  .mt-state-success .mt-input-tips,.mt-state-success .mt-input-focus .mt-input-lebel {
    color: #67BD6A;
  }
  .mt-state-warning .mt-input-tips,.mt-state-warning .mt-input-focus .mt-input-lebel {
    color: #FFA829;
  }
  .mt-state-error .mt-input-tips,.mt-state-error .mt-input-focus .mt-input-lebel {
    color: #F6675D;
  }
</style>