<template>
  <div class="mt-button-group">
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