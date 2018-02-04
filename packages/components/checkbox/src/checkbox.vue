<template>
  <div
    class="mt-checkbox" 
    :class="{
      'mt-check-disabled': disabled,
      'mt-check-inline': isInline,
      [`mt-check-${state}`]: state,
    }"
  >
    <label>
        <input type="checkbox" 
          @change="handleChange" 
          v-bind="$props" 
          :disabled="isDisabled"
          v-model="getCurrenValue"
        >
        <i class="mt-check-helper"></i>
        <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'MtCheckbox',
    data() {
      return {
        currenValue: this.getCurrenValue
      }
    },
    props: {
      value: {},
      disabled: Boolean,
      checked: Boolean,
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
          return thisGroup
            ? thisGroup.currentGroupValue 
              && thisGroup.currentGroupValue.indexOf(this.value) > -1 
                ? true : false
                  : this.value
        },
        set(val) {
          this.currenValue = val
        }
      },
      isGroup() {
        let parent = this.$parent
        while(parent) {
          if(parent.$options.name !== 'MtCheckboxGroup') {
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
        this.$emit('input', this.currenValue, event)
        if(this.isGroup) {
          this.isGroup.updateVal(this.value, this.currenValue)
        }
      }
    }
  }
</script>