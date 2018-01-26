<template>
  <div class="input-group">
    <span class="input-group-addon">
      <i class="zmdi zmdi-arrow-missed"></i>
    </span>
    <div class="fg-line">
        <input type="text" class="form-control" v-bind="$props">
    </div>
    <span class="input-group-addon last">
      <i class="zmdi zmdi-globe"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'MtInput',
    props: {

    }
  }
</script>

<style scoped>

</style>