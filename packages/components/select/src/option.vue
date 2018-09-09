<template>
  <li class="mt-option" :class="{'selected': isChoice, 'disabled': isDisabled}" v-show="isShow" @click="handleClick">
    <a>
      <span class="mt-option-text">
        <slot></slot>
      </span>
      <span v-show="selected" class="glyphicon glyphicon-ok mt-option-check"></span>
    </a>
  </li>
</template>

<script>
  import Emitter from 'mt-admin/mixins/emitter';

  export default {
    name: 'MtOption',
    mixins: [Emitter],
    data() {
      return {
        groupDisabled: false,
        isChoice: false,
        isShow: true
      }
    },
    props: {
      value: {
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.isChoice = this.selected;
      this.$on('handleGroupDisabled', this.handleGroupDisabled);
    },
    methods: {
      handleClick() {
        
      },
      handleChange(val) {
        if(val == this.value) {
          this.selected = true;
        }else{
          this.selected = false;
        }
      },
      handleGroupDisabled(val) {
        this.groupDisabled = val;
      },
      changeShow(val) {
        if(this.$el.textContent.indexOf(val) > -1) {
          this.isShow = true;
        }else {
          this.isShow = false;
        }
      }
    },
    computed: {
      isDisabled() {
        return this.disabled || this.groupDisabled;
      },
    }
  }
</script>

<style>
  .mt-option {
    position: relative;
  }
  .mt-option a {
    display: block;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    white-space: nowrap;
    color: #333;
    padding: 10px 20px;
    -webkit-transition: background-color;
    -o-transition: background-color;
    transition: background-color;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mt-option.select a, .mt-option a:focus, .mt-option a:hover{
    color: #333;
    text-decoration: none;
    outline: 0;
    background-color: rgba(0,0,0,.075);
  }
  .mt-option.disabled a{
    cursor: not-allowed;
  }
  .mt-option.disabled a, .mt-option.disabled a:focus, .mt-option.disabled a:hover {
    color: #e4e4e4;
  }
  .mt-option-text {
    display: inline-block;
  }
  .mt-option-check{
    margin-top: -5px!important;
    font-size: 19px;
    -webkit-transition: all;
    -o-transition: all;
    transition: all;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    display: block!important;
    position: absolute;
    top: 11px;
    right: 15px;
  }
  .mt-option.select .mt-option-check{
    position: absolute;
    display: inline-block;
    right: 15px;
    margin-top: 5px;
  }
</style>