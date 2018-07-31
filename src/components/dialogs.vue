<template>
  <mt-card title="对话框" minTitle="可用作弹出警告或更新处理，填入 size 属性可更改规格">
    <mt-dialog title="Small对话框" size="small" v-model="dialog1">这是一个小的对话框</mt-dialog>
    <mt-dialog title="对话框" v-model="dialog2">这是一个普通的对话框(<ゝω·)~☆kira</mt-dialog>
    <mt-dialog title="Large对话框" size="large" v-model="dialog3">这是一个大的对话框</mt-dialog>
    <div class="btn-demo">
      <mt-button @click="click('dialog1')">small</mt-button>
      <mt-button @click="click('dialog2')">默认</mt-button>
      <mt-button @click="click('dialog3')">large</mt-button>
    </div>
    <p class="c-black f-500 m-t-15 m-b-20">自定义按钮文字，填入 confirmText 和 cancelText 属性</p>
    <mt-dialog title="自定义按钮文字对话框" v-model="dialog4" confirmText="自定义确认" cancelText="自定义取消">这是一个自定义按钮文字对话框</mt-dialog>
    <mt-button @click="click('dialog4')">自定义文字</mt-button>
    <p class="c-black f-500 m-t-20 m-b-20">自定义背景，填入 bg 属性</p>
    <mt-dialog title="蓝色对话框" v-model="dialog5" bg="blue">这是一个蓝色对话框</mt-dialog>
    <mt-dialog title="绿色对话框" v-model="dialog6" bg="green">这是一个绿色对话框</mt-dialog>
    <mt-dialog title="红色对话框" v-model="dialog7" bg="red">这是一个红色对话框</mt-dialog>
    <mt-dialog title="黄色对话框" v-model="dialog8" bg="orange">这是一个橙色对话框</mt-dialog>
    <mt-dialog title="灰色对话框" v-model="dialog9" bg="bluegray">这是一个灰色对话框</mt-dialog>
    <div class="btn-demo">
      <mt-button @click="click('dialog5')" bg="blue">BLUE</mt-button>
      <mt-button @click="click('dialog6')" bg="green">GREEN</mt-button>
      <mt-button @click="click('dialog7')" bg="red">RED</mt-button>
      <mt-button @click="click('dialog8')" bg="orange">ORANGE</mt-button>
      <mt-button @click="click('dialog9')" bg="bluegray">BLUE GRAY</mt-button>
    </div>
  </mt-card>
</template>

<script>
  export default {
    data() {
      return {
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,
        dialog8: false,
        dialog9: false
      }
    },
    methods: {
      click(val) {
        this[val] = true
      }
    }
  }
</script>

<style scoped>
  .btn-demo>button {
    margin: 0 5px 10px 0;
  }
</style>