<template>
  <div
    class="mt-checkbox" 
    :class="{
      'mt-check-disabled': disabled,
      'mt-check-inline': inline,
      [`mt-check-${checkType}`]: checkType,
    }"
  >
    <label>
        <input type="checkbox" @change="handleChange" v-bind="$props" v-model="model">
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
        currentValue: false
      }
    },
    props: {
      value: {},
      disabled: Boolean,
      checked: Boolean,
      id: String,
      name: String,
      from: String,
      inline: {
        type: Boolean,
        default: true
      },
      checkType: String
    },
    computed: {
      model: {
        get() {
          return this.isGroup
            ? this.store : this.value !== undefined
              ? this.value : this.currentValue
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('ElCheckboxGroup', 'input', [val])
          } else {
            this.$emit('change', val)
            this.currentValue = val
          }
        }
      },
      isGroup() {
        let parent = this.$parent
        while(parent) {
          if(parent.$options.componentName !== 'MtCheckboxGroup') {
            parent = parent.$parent
          }else {
            this.checkboxGroup = parent
            return true
          }
        }
        return false
      },
      store() {
        return this.checkboxGroup ? this.checkboxGroup.value : this.value;
      }
    },
    methods: {
      handleChange(event, value) {
        this.$emit('change', 123)
      }
    }
  }
</script>