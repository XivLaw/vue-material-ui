<template>
  <div class="el-checkbox-group" @change="handleInput">
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
      disabled: Boolean
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
      handleInput(event) {
        this.$emit('change', this.currentGroupValue, event);
      }
    }
  }
</script>