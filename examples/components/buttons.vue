<template>
  <div>
    <mt-card title="按钮" minTitle="基础的按钮">
      <p class="f-500 c-black m-b-20">Bootstrap 颜色样式</p>
      <div class="btn-demo">
        <mt-button>DEFAULT</mt-button>
        <mt-button buttonType="info">INFO</mt-button>
        <mt-button buttonType="primary">PRIMARY</mt-button>
        <mt-button buttonType="success">SUCCESS</mt-button>
        <mt-button buttonType="warning">WARNING</mt-button>
        <mt-button buttonType="danger">DANGER</mt-button>
      </div>
      <p class="f-500 c-black m-b-20">按钮的背景色</p>
      <div class="btn-demo btn-colors">
        <mt-button bg="cyan">CYAN</mt-button>
        <mt-button bg="teal">TEAL</mt-button>
        <mt-button bg="amber">AMBER</mt-button>
        <mt-button bg="orange">ORANGE</mt-button>
        <mt-button bg="deeporange">DEEP ORANGE</mt-button>
        <mt-button bg="pink">PINK</mt-button>
        <mt-button bg="red">RED</mt-button>
        <mt-button bg="lightblue">LIGHT BLUE</mt-button>
        <mt-button bg="blue">BLUE</mt-button>
        <mt-button bg="red">RED</mt-button>
        <mt-button bg="indigo">INDIGO</mt-button>
        <mt-button bg="lime">LIME</mt-button>
        <mt-button bg="lightgreen">LIGHT GREEN</mt-button>
        <mt-button bg="green">GREEN</mt-button>
        <mt-button bg="purple">PURPLE</mt-button>
        <mt-button bg="deeppurple">DEEP PURPLE</mt-button>
        <mt-button bg="gray">GRAY</mt-button>
        <mt-button bg="bluegray">BLUE GRAY</mt-button>
        <mt-button bg="black">BLACK</mt-button>
      </div>
      <p class="f-500 c-black m-b-20">按钮的大小</p>
      <div class="btn-demo btn-size">
        <mt-button buttonType="primary" size="large">LARGE</mt-button>
        <mt-button buttonType="primary">DEFAULT</mt-button>
        <mt-button buttonType="primary" size="small">SMALL</mt-button>
        <mt-button buttonType="primary" size="xsmall">XSMALL</mt-button>
      </div>
      <p class="f-500 c-black m-b-20">Disable 的按钮样式</p>
      <div class="btn-demo">
        <mt-button disabled>DEFAULT</mt-button>
        <mt-button buttonType="info" disabled>INFO</mt-button>
        <mt-button buttonType="primary" disabled>PRIMARY</mt-button>
        <mt-button buttonType="success" disabled>SUCCESS</mt-button>
        <mt-button buttonType="warning" disabled>WARNING</mt-button>
        <mt-button buttonType="danger" disabled>DANGER</mt-button>
      </div>
    </mt-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .btn-demo {
    margin-bottom: 30px;
  }
  .btn-demo button {
    margin: 0 5px 10px 0;
  }
  .btn-colors button {
    min-width: 112px;
  }
</style>