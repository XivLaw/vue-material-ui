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
        if(bool) {
          this.currentGroupValue.push(val)
        }else {
          let key = this.currentGroupValue.indexOf(val)
          this.currentGroupValue.splice(key, 1)
        }
      },
      handleChange(event) {
        this.$emit('change', this.currentGroupValue, event);
      }
    }
  }
</script>