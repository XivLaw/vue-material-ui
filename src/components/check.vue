<template>
  <div>
    <mt-card title="多选框和单选框" minTitle="两种选择框都分为默认的">
      <p class="c-black f-500 m-b-20">默认</p>
      <mt-checkbox-group v-model="checkbox1">
        <mt-checkbox class="m-r-20" value="苹果">这是一个苹果</mt-checkbox>
        <mt-checkbox class="m-r-20" value="香蕉">这是一个香蕉</mt-checkbox>
        <mt-checkbox class="m-r-20" value="梨" disabled>这是一个梨</mt-checkbox>
        {{checkbox1}}
      </mt-checkbox-group>
      <mt-radio-group v-model="radio1">
        <mt-radio class="m-r-20" val="苹果">这是一个苹果</mt-radio>
        <mt-radio class="m-r-20" val="香蕉">这是一个香蕉</mt-radio>
        <mt-radio class="m-r-20" val="梨" disabled>这是一个梨</mt-radio>
        {{radio1}}
      </mt-radio-group>
      <p class="c-black f-500 m-b-5">inline样式</p>
      <small>在标签内写入 inline 属性</small><br><br>
      <mt-checkbox-group v-model="checkbox2" inline>
        <mt-checkbox class="m-r-20" value="樱桃">樱桃</mt-checkbox>
        <mt-checkbox class="m-r-20" value="车厘子">车厘子</mt-checkbox>
        <mt-checkbox class="m-r-20" value="Cherry" disabled>Cherry</mt-checkbox>
        {{checkbox2}}
      </mt-checkbox-group>
      <mt-radio-group v-model="radio2" inline>
        <mt-radio class="m-r-20" val="菠萝">菠萝</mt-radio>
        <mt-radio class="m-r-20" val="凤梨">凤梨</mt-radio>
        <mt-radio class="m-r-20" val="Pineapple" disabled>Pineapple</mt-radio>
        {{radio2}}
      </mt-radio-group>
      <p class="c-black f-500 m-b-5">state样式</p>
      <small>在标签内写入 state 属性</small><br><br>
      <mt-checkbox class="m-r-20 m-b-20" state="success" inline>成功</mt-checkbox>
      <mt-checkbox class="m-r-20 m-b-20" state="warning" inline>警告</mt-checkbox>
      <mt-checkbox class="m-r-20 m-b-20" state="error" inline>错误</mt-checkbox>
      <mt-radio class="m-r-20 m-b-20" state="success" inline>成功</mt-radio>
      <mt-radio class="m-r-20 m-b-20" state="warning" inline>警告</mt-radio>
      <mt-radio class="m-r-20 m-b-20" state="error" inline>错误</mt-radio>
    </mt-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkbox1: ['苹果','梨'],
        checkbox2: ['樱桃'],
        radio1: '苹果',
        radio2: '菠萝',
      }
    }
  }
</script>

<style scoped>

</style>