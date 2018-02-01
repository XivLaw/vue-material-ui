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
        <input type="checkbox" @change="handleChange" v-bind="$props" v-model="getCurrenValue">
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
      inline: {
        type: Boolean,
        default: true
      },
      checkType: String
    },
    computed: {
      getCurrenValue: {
        get() {
          let thisGroup = this.isGroup
          return thisGroup
            ? thisGroup.value.indexOf(this.value) > -1 
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
            this.checkboxGroup = parent
            return this.checkboxGroup
          }
        }
        return false
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('change', 123)
      }
    }
  }
</script>