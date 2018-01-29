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

    <mt-card title="Icon 按钮" minTitle="需要写入icon属性">
      <p class="f-500 c-black m-b-20">Bootstrap 颜色样式</p>
      <div class="btn-demo">
        <mt-button icon="home">HOME</mt-button>
        <mt-button icon="search">SEARCH</mt-button>
        <mt-button icon="more-vert">More</mt-button>
        <mt-button icon="arrow-forward">FORWARD</mt-button>
        <mt-button icon="arrow-back">BACK</mt-button>
        <mt-button icon="refresh">SYNC</mt-button>
        <mt-button icon="menu">MENU</mt-button>
        <mt-button icon="phone">PHONE</mt-button>
        <mt-button icon="check">CHECK</mt-button>
      </div>
      <div class="btn-demo">
        <mt-button icon="home"></mt-button>
        <mt-button icon="search"></mt-button>
        <mt-button icon="more-vert"></mt-button>
        <mt-button icon="arrow-forward"></mt-button>
        <mt-button icon="arrow-back"></mt-button>
        <mt-button icon="refresh"></mt-button>
        <mt-button icon="menu"></mt-button>
        <mt-button icon="phone"></mt-button>
        <mt-button icon="check"></mt-button>
      </div>
      <div class="btn-demo">
        <mt-button icon="home" bg="cyan"></mt-button>
        <mt-button icon="search" bg="teal"></mt-button>
        <mt-button icon="more-vert" bg="amber"></mt-button>
        <mt-button icon="arrow-forward" bg="orange"></mt-button>
        <mt-button icon="arrow-back" bg="deeporange"></mt-button>
        <mt-button icon="refresh" bg="pink"></mt-button>
        <mt-button icon="menu" bg="red"></mt-button>
        <mt-button icon="phone" bg="lightblue"></mt-button>
        <mt-button icon="check" bg="blue"></mt-button>
      </div>
      <div class="btn-demo">
        <mt-button isRound icon="home"></mt-button>
        <mt-button isRound icon="search"></mt-button>
        <mt-button isRound icon="more-vert"></mt-button>
        <mt-button isRound icon="arrow-forward"></mt-button>
        <mt-button isRound icon="arrow-back"></mt-button>
        <mt-button isRound icon="refresh"></mt-button>
        <mt-button isRound icon="menu"></mt-button>
        <mt-button isRound icon="phone"></mt-button>
        <mt-button isRound icon="check"></mt-button>
      </div>
      <div class="btn-demo">
        <mt-button isRound icon="home" bg="cyan"></mt-button>
        <mt-button isRound icon="search" bg="teal"></mt-button>
        <mt-button isRound icon="more-vert" bg="amber"></mt-button>
        <mt-button isRound icon="arrow-forward" bg="orange"></mt-button>
        <mt-button isRound icon="arrow-back" bg="deeporange"></mt-button>
        <mt-button isRound icon="refresh" bg="pink"></mt-button>
        <mt-button isRound icon="menu" bg="red"></mt-button>
        <mt-button isRound icon="phone" bg="lightblue"></mt-button>
        <mt-button isRound icon="check" bg="blue"></mt-button>
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