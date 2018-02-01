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
        currentValue: this.value
      }
    },
    props: {
      value: {},
      disabled: Boolean
    },
    methods: {
      handleInput(event, val) {
        console.log(arguments)
        this.$emit('input', event);
      }
    }
  }
</script>