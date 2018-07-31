<template>
  <div>
    <mt-card title="警告" minTitle="用于警示性提示 state 属性表示警告状态">
      <mt-alert text="这是一个默认警告"></mt-alert>
      <mt-alert state="success" text="这是一个成功警告"></mt-alert>
      <mt-alert state="warning" text="这是一个警示警告"></mt-alert>
      <mt-alert state="error" text="这是一个错误警告"></mt-alert>
    </mt-card>
    <mt-card title="可关闭警告" minTitle="写入 closable 属性表示该警告可关闭">
      <mt-alert text="这是一个可关闭的默认警告" closable></mt-alert>
      <mt-alert state="success" closable text="这是一个可关闭的成功警告"></mt-alert>
      <mt-alert state="warning" closable text="这是一个可关闭的警示警告"></mt-alert>
      <mt-alert state="error" closable text="这是一个可关闭的错误警告"></mt-alert>
    </mt-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>