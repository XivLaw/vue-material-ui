<template>
  <div>
    <mt-card title="输入框" minTitle="默认的输入框">
      <mt-input 
        placeholder="inputSize=&quot;small&quot;" 
        inputSize="small"  
        :tipsText="`value=&quot;${inputSmall}&quot;`" 
        v-model="inputSmall"
      >
      </mt-input>
      <mt-input 
        placeholder="Default" 
        :tipsText="`value=&quot;${inputDefault}&quot;`" 
        v-model="inputDefault"
      >
      </mt-input>
      <mt-input 
        placeholder="inputSize=&quot;large&quot;" 
        inputSize="large"
        :tipsText="`value=&quot;${inputLarge}&quot;`" 
        v-model="inputLarge"
      >
      </mt-input>
      <div class="row">
        <div class="col-sm-4">
          <mt-input placeholder="col-sm-4"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="col-sm-4"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="col-sm-4"></mt-input>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <mt-input placeholder="col-sm-3"></mt-input>
        </div>
        <div class="col-sm-3">
          <mt-input placeholder="col-sm-3"></mt-input>
        </div>
        <div class="col-sm-3">
          <mt-input placeholder="col-sm-3"></mt-input>
        </div>
        <div class="col-sm-3">
          <mt-input placeholder="col-sm-3"></mt-input>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <mt-input placeholder="col-sm-6"></mt-input>
        </div>
        <div class="col-sm-6">
          <mt-input placeholder="col-sm-6"></mt-input>
        </div>
      </div>
    </mt-card>
    <mt-card title="Flag样式的输入框" minTitle="组件内加入 isFlag 属性">
      <mt-input placeholder="Small" inputSize="small" isFlag></mt-input>
      <mt-input placeholder="Default" isFlag></mt-input>
      <mt-input placeholder="Large" inputSize="large" isFlag></mt-input>
    </mt-card>
    <mt-card title="Icon样式的输入框" minTitle="组件内加入 beforeIcon 或/和 afterIcon 属性">
      <div class="row">
        <div class="col-sm-4">
          <mt-input placeholder="account" beforeIcon="account"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="local-phone" afterIcon="local-phone"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="email pin" beforeIcon="email" afterIcon="pin"></mt-input>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <mt-input placeholder="camera" beforeIcon="camera"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="share" afterIcon="share"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="cloud-download folder" beforeIcon="cloud-download" afterIcon="folder"></mt-input>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <mt-input placeholder="male-alt" beforeIcon="male-alt"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="female" afterIcon="female"></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="私奔" beforeIcon="male-female" afterIcon="run"></mt-input>
        </div>
      </div>
      <p class="c-black">Flag样式</p>
      <div class="row">
        <div class="col-sm-4">
          <mt-input placeholder="account" beforeIcon="account" isFlag></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="local-phone" afterIcon="local-phone" isFlag></mt-input>
        </div>
        <div class="col-sm-4">
          <mt-input placeholder="email pin" beforeIcon="email" afterIcon="pin" isFlag></mt-input>
        </div>
      </div>
      <p class="c-black">不同大小</p>
      <mt-input placeholder="Small" inputSize="small" beforeIcon="email"></mt-input>
      <mt-input placeholder="Default" beforeIcon="email"></mt-input>
      <mt-input placeholder="Large" inputSize="large" beforeIcon="email"></mt-input>
    </mt-card>
    <mt-card title="提示样式" minTitle="组件内加入 state 属性">
      <mt-input placeholder="success" state="success" tipsText="这是一个成功样式的输入框" isFlag></mt-input>
      <mt-input placeholder="warning" state="warning" tipsText="这是一个警告样式的输入框" isFlag></mt-input>
      <mt-input placeholder="error" state="error" tipsText="这是一个失败样式的输入框" isFlag></mt-input>
    </mt-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputSmall: 'Small',
        inputDefault: 'Default',
        inputLarge: 'Large',
      }
    },
  }
</script>

<style scoped>

</style>