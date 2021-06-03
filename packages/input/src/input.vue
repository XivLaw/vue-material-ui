<template>
  <div
    class="mt-input-group clearfix"
    :class="{
      [`mt-input-group-${inputSize}`]: inputSize,
      [`mt-input-${state}`]: state,
    }"
  >
    <span class="mt-input-icon-before" v-if="beforeIcon">
      <i :class="['zmdi', `zmdi-${beforeIcon}`]"></i>
    </span>
    <div
      class="mt-input-line"
      :class="{
        'mt-input-focus': focused,
        'mt-input-have': isFlag && haveText,
      }"
    >
      <input
        type="text"
        class="mt-input"
        v-bind="$props"
        :placeholder="placeholderText"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleChange"
        v-model="currentValue"
      />
      <label class="mt-input-lebel" v-if="isFlag">{{ placeholder }}</label>
    </div>
    <small class="mt-input-tips" v-if="tipsText">{{ tipsText }}</small>
    <span class="mt-input-icon-after" v-if="afterIcon">
      <i :class="['zmdi', `zmdi-${afterIcon}`]"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MtInput',
  data () {
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
    id: String,
    name: String,
    form: String,
    maxlength: Number,
    minlength: Number,
    readonly: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
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
  mounted () {
    if (!this.isFlag) {
      this.placeholderText = this.placeholder
    }
    this.haveText = this.currentValue && this.currentValue != '' ? true : false
  },
  methods: {
    handleBlur (event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    handleFocus (event) {
      if (this.readonly) {
        this.focused = false;
      } else {
        this.focused = true;
      }
      this.$emit('focus', event);
    },
    handleInput (event) {
      this.$emit('input', event.target.value);
    },
    handleChange (event) {
      this.$emit('change', event.target.value);
    }
  },
  watch: {
    'value' (val) {
      this.currentValue = val
    },
    'currentValue' (val) {
      this.haveText = val != '' ? true : false
    },
    'placeholder' (val) {
      if (!this.isFlag) {
        this.placeholderText = this.placeholder
      }
    }
  }
}
</script>