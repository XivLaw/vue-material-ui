<template>
  <ul class="mt-optgroup">
    <li class="mt-optgroup-label">
      <span class="text">{{label}}</span>
    </li>
    <slot></slot>
  </ul>
</template>

<script>
  import Emitter from 'mt-admin/mixins/emitter';

  export default {
    name: 'MtOptionGroup',
    mixins: [Emitter],
    props: {
      label: {
        required: true,
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if(this.disabled) {
        this.broadcast('MtOption', 'handleGroupDisabled', this.disabled);
      }
    },
    watch: {
      disabled(val) {
        this.broadcast('MtOption', 'handleGroupDisabled', val);
      }
    }
  }
</script>

<style scoped>
  .mt-optgroup-label {
    display: block;
    font-size: 12px;
    line-height: 1.42857143;
    white-space: nowrap;
    padding: 3px 17px;
    margin-top: 10px;
    color: #b1b1b1;
    text-transform: uppercase;
    font-weight: 400;
  }
</style>