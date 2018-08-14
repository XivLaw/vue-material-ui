<template>
  <transition name="mt-dialog">
    <div class="mt-dialog-modal" @click="close" v-show="show">
      <div class="mt-dialog" :class="{[`mt-dialog-${size}`]: size}" @click.stop>
        <div class="mt-dialog-content" :class="{[`bgm-${bg}`]: bg}">
          <div class="mt-dialog-header" v-if="title">
            <h4 class="mt-dialog-title">{{title}}</h4>
          </div>
          <div class="mt-dialog-body" :class="{'mt-dialog-padding': !title}">
            <slot></slot>
          </div>
          <div class="mt-dialog-footer">
            <mt-button @click="confirm">{{confirmText}}</mt-button>
            <mt-button @click="cancel">{{cancelText}}</mt-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MtDialog',
    data() {
      return {
        show: this.value
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: String,
      size: String,
      bg: String,
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      close() {
        this.show = false
        this.$emit('input', false)
      },
      confirm(event) {
        this.$emit('confirm', event)
      },
      cancel(event) {
        this.close()
        this.$emit('cancel', event)
      }
    },
    watch: {
      'value'(val) {
        this.show = val
        this.$emit('input', val)
      }
    }
  }
</script>