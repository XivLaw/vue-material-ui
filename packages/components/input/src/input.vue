<template>
  <div class="mt-input-group clearfix">
    <span class="mt-input-icon-before" v-if="beforeIcon">
      <i :class="['zmdi', `zmdi-${beforeIcon}`]"></i>
    </span>
    <div class="mt-input-line" :class="{'mt-input-focus': focused}">
        <input type="text" 
          class="mt-input"
          v-bind="$props"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInput"
          @change="handleChange"
        >
    </div>
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
        focused: false
      }
    },
    props: {
      value: [String, Number],
      placeholder: String,
      size: String,
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
      beforeIcon: String,
      afterIcon: String,
    },
    methods: {
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
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
  .mt-input-line:not([class*=has-]):after {
    background: #2196F3;
  }
  .mt-input-line.mt-input-focus:after {
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
    border-bottom: 1px solid #e0e0e0;
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
</style>