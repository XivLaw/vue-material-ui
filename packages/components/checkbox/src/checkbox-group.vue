<template>
  <div class="el-checkbox-group" @change="handleChange">
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
      handleChange(event, val) {
        console.log(arguments)
        this.$emit('change', event);
      }
    }
  }
</script>