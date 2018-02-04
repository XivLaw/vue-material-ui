<template>
  <div class="mt-card">
    <div class="mt-card-header" v-if="title" :class="{[`bgm-${bg}`]: bg}">
      <h2>
        {{title}}
        <small v-if="minTitle">{{minTitle}}</small>
      </h2>
    </div>
    <div v-if="table" class="mt-card-table">
      <slot></slot>
    </div>
    <div 
      v-else
      class="mt-card-body clearfix" 
      :class="{
        'mt-card-padding': !title || bg, 
        [`bgm-${bg}`]: !title && bg
      }"
    >
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
        table: Boolean,
        bg: {
          type: String,
          validator (val) {
            var colorStr = 'black,brown,pink,red,blue,purple,deeppurple,lightblue,cyan,teal,green,lightgreen,lime,yellow,amber,orange,deeporange,gray,bluegray,indigo'
            return colorStr.indexOf(val) >= 0 
          }
        }
      }
  }
</script>