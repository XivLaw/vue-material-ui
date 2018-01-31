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
        <input type="checkbox" @change="handleChange" v-bind="$props" v-model="currentValue">
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
        currentValue: this.value
      }
    },
    props: {
      value: Boolean,
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

    },
    methods: {
      handleChange() {
        this.$emit('change', this.currentValue)
      }
    }
  }
</script>