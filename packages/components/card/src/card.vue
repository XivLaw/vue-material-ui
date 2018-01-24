<template>
  <div class="mt-card">
    <div class="mt-card-header" v-if="title" :class="{[`bgm-${cardBg}`]: cardBg}">
      <h2>
        {{title}}
        <small v-if="minTitle">{{minTitle}}</small>
      </h2>
    </div>
    <div class="mt-card-body" :class="{'mt-card-padding': !title || cardBg, [`bgm-${cardBg}`]: !title && cardBg}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'MtCard',
      props: {
        title: String,
        minTitle: String,
        cardBg: {
          type: String,
          validator (val) {
            var colorStr = 'black,brown,pink,red,blue,purple,deeppurple,lightblue,cyan,teal,green,lightgreen,lime,yellow,amber,orange,deeporange,gray,bluegray,indigo'
            return colorStr.indexOf(val) >= 0 
          }
        }
      }
  }
</script>

<style scoped>
  .mt-card,.mt-card-header {
    position: relative;
  }
  .mt-card {
    background: #FFFFFF;
    margin-bottom: 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15)
  }
  .mt-card-header h2 {
    margin: 0;
    line-height: 100%;
    font-size: 17px;
    font-weight: 400;
  }
  .mt-card-header h2 small {
    display: block;
    margin-top: 8px;
    color: #AEAEAE;
    line-height: 160%;
  }
  .mt-card .mt-card-body{
    padding-top: 0;
  }
  .mt-card .mt-card-padding{
    padding-top: 18px;
  }
  .mt-card-body:after,.mt-card-body:before {
    content: " ";
    display: table;
  }
  .mt-card-body:after {
    clear: both;
  }
  @media screen and (min-width:768px) {
    .mt-card-header,.mt-card-body {
      padding: 25px 27px;
    }
  }
  @media screen and (max-width:991px) {
    .mt-card-header,.mt-card-body {
      padding: 18px;
    }
  }
</style>