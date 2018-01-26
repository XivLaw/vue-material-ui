<template>
  <div class="input-group">
    <span class="input-group-addon" v-if="beforeIcon">
      <i class="zmdi zmdi-arrow-missed"></i>
    </span>
    <div class="fg-line">
        <input type="text" class="form-control" v-bind="$props">
    </div>
    <span class="input-group-addon last" v-if="afterIcon">
      <i class="zmdi zmdi-globe"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'MtInput',
    props: {
      value: [String, Number],
      placeholder: String,
      size: String,
      name: String,
      form: String,
      id: String,
      maxlength: Number,
      minlength: Number,
      readonly: Boolean,
      autofocus: Boolean,
      disabled: Boolean,
      autoComplete: {
        type: String,
        default: 'off'
      },
      step: {},
      beforeIcon: String,
      afterIcon: String,
    }
  }
</script>

<style scoped>

</style>