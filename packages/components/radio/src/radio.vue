<template>
  <div
    class="mt-radio" 
    :class="{
      'mt-check-disabled': disabled,
      'mt-check-inline': isInline,
      [`mt-check-${state}`]: state,
    }"
  >
    <label>
        <input
          type="radio"
          @change="handleChange"
          v-bind="$props" 
          :disabled="isDisabled"
          :checked="getCurrenValue == val"
          :value="val"
          v-model="getCurrenValue"
        >
        <i class="mt-check-helper"></i>
        <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'MtRadio',
    data() {
      return {
        currenValue: this.getCurrenValue
      }
    },
    props: {
      value: {},
      val: {},
      disabled: Boolean,
      id: String,
      name: String,
      from: String,
      inline: Boolean,
      state: String
    },
    computed: {
      getCurrenValue: {
        get() {
          let thisGroup = this.isGroup
          return thisGroup ? thisGroup.currentGroupValue : this.value
        },
        set(val) {
          if(this.isGroup) {
            this.isGroup.updateVal(val)
          }else {
            this.$emit('input', val)
          }
        }
      },
      isGroup() {
        let parent = this.$parent
        while(parent) {
          if(parent.$options.name !== 'MtRadioGroup') {
            parent = parent.$parent
          }else {
            return parent
          }
        }
        return false
      },
      isDisabled() {
        return this.disabled || this.isGroup.disabled
      },
      isInline() {
        return this.inline || this.isGroup.inline
      }
    },
    methods: {
      handleChange(event) {
        this.$nextTick(() => {
          this.$emit('change', this.getCurrenValue, event)
          if(this.isGroup) {
            this.isGroup.updateVal(this.getCurrenValue)
          }
        })
      }
    }
  }
</script>