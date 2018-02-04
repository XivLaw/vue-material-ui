<template>
  <div class="mt-alert" :class="{'mt-alert-closable': closable, [`mt-alert-${state}`]: state}" v-show="show">
    {{text}}
    <button type="button" class="mt-alert-close" @click="close" v-if="closable">
      <span>×</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'MtAlert',
    data() {
      return {
        show: true,
      }
    },
    props: {
      text: String,
      closable: {
        type: Boolean,
        default: false
      },
      state: String
    },
    methods: {
      close() {
        this.show = false
        this.$emit('close')
      }
    }
  }
</script>