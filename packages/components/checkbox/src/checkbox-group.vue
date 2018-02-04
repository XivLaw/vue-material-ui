<template>
  <div class="mt-checkbox-group" @change="handleChange">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MtCheckboxGroup',
    data() {
      return {
        currentGroupValue: this.value
      }
    },
    props: {
      value: {},
      disabled: Boolean,
      inline: Boolean
    },
    methods: {
      updateVal(val, bool){
        if(!Array.isArray(this.currentGroupValue)) {
          this.currentGroupValue = [this.currentGroupValue]
        }
        if(bool) {
          this.currentGroupValue.push(val)
        }else {
          let key = this.currentGroupValue.indexOf(val)
          this.currentGroupValue.splice(key, 1)
        }
        this.$emit('input', this.currentGroupValue)
      },
      handleChange(event) {
        this.$emit('change', this.currentGroupValue, event);
      }
    }
  }
</script>