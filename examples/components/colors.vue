<template>
  <mt-card title="背景颜色" minTitle="颜色可用于各个组件的 bg 属性">
    <p>
      颜色均采自 
      <a href="https://material.io/guidelines/style/color.html#color-color-tool" target="_blank">Google Material Design</a>
    </p>
    <div class="row">
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-red">
              <span class="color">Red</span>
              <span class="code">#F44336</span>
              <span class="css">bg="red"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-pink">
              <span class="color">PINK</span>
              <span class="code">#E91E63</span>
              <span class="css">bg="pink"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-purple">
              <span class="color">PURPLE</span>
              <span class="code">#9C27B0</span>
              <span class="css">bg="purple"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-deeppurple">
              <span class="color">DEEP PURPLE</span>
              <span class="code">#673AB7</span>
              <span class="css">bg="deeppurple"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-indigo">
              <span class="color">INDIGO</span>
              <span class="code">#3F51B5</span>
              <span class="css">bg="indigo"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-blue">
              <span class="color">BLUE</span>
              <span class="code">#2196F3</span>
              <span class="css">bg="blue"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-lightblue">
              <span class="color">LIGHT BLUE</span>
              <span class="code">#03A9F4</span>
              <span class="css">bg="lightblue"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-cyan">
              <span class="color">CYAN</span>
              <span class="code">#00BCD4</span>
              <span class="css">bg="cyan"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-teal">
              <span class="color">TEAL</span>
              <span class="code">#4CAF50</span>
              <span class="css">bg="teal"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-red">
              <span class="color">green</span>
              <span class="code">#4CAF50</span>
              <span class="css">bg="green"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-lightgreen">
              <span class="color">LIGHT GREEN</span>
              <span class="code">#8BC34A</span>
              <span class="css">bg="lightgreen"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-red">
              <span class="color">Red</span>
              <span class="code">#F44336</span>
              <span class="css">bg="red"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-lime">
              <span class="color">LIME</span>
              <span class="code">#CDDC39</span>
              <span class="css">bg="lime"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-amber">
              <span class="color">AMBER</span>
              <span class="code">#FFC107</span>
              <span class="css">bg="amber"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-orange">
              <span class="color">ORANGE</span>
              <span class="code">#FF9800</span>
              <span class="css">bg="orange"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-deeporange">
              <span class="color">DEEP ORANGE</span>
              <span class="code">#FF5722</span>
              <span class="css">bg="deeporange"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-brown">
              <span class="color">BROWN</span>
              <span class="code">#795548</span>
              <span class="css">bg="brown"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-gray">
              <span class="color">GRAY</span>
              <span class="code">#9E9E9E</span>
              <span class="css">bg="gray"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-bluegray">
              <span class="color">BLUE GRAY</span>
              <span class="code">#607D8B</span>
              <span class="css">bg="bluegray"</span>
          </div>
      </div>
      <div class="col-sm-3 col-xs-6">
          <div class="color-block bgm-black">
              <span class="color">BLACK</span>
              <span class="code">#000000</span>
              <span class="css">bg="black"</span>
          </div>
      </div>
    </div>
  </mt-card>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .color-block {
    height: 100px;
    color: rgba(255,255,255,0.9);
    text-align: center;
    padding: 15px 0;
    border-radius: 2px;
    margin-bottom: 25px;
  }
  .color-block span {
    display: block;
  }
  .color-block .color {
    font-size: 14px;
    text-transform: uppercase;
  }
  .color-block .code {
    margin: 5px 0;
  }
  .color-block .css {
    font-size: 11px;
  }
</style>