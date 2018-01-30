<template>
  <div class="mt-button-group" :class="{[`mt-button-group-${size}`]: size}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MtButtonGroup',
    props: {
      size: String
    }
  }
</script>

<style scoped>
  .mt-button-group{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.3);
  }
  .mt-buttongroup .mt-button {
    margin: 0;
  }
  .mt-button-group .mt-button {
    position: relative;
    float: left;
  }
  .mt-button-group>.mt-button:first-child {
    margin-left: 0;
  }
  .mt-button-group .mt-button+.mt-button {
    margin-left: -1px;
  }
  .mt-button-group>.mt-button:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .mt-button-group>.mt-button:last-child:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
</style>