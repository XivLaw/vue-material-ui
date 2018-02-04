<template>
  <div class="mt-radio-group" @change="handleChange">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MtRadioGroup',
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
      updateVal(val){
        this.currentGroupValue = val
        this.$emit('input', val)
      },
      handleChange(event) {
        this.$emit('change', this.currentGroupValue, event);
      }
    }
  }
</script>