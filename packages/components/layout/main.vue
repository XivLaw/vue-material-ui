<template>
  <section id="main">
    <div class="container">
      <div class="block-header">
        <h2>{{title}}</h2>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MtMain',
    props: {
      title: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
  #main {
    padding-top: 100px;
    padding-right: 15px
  }
  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .container:after,.container:before {
    content: " ";
    display: table;
  }
  .container:after {
    clear: both;
  }
  .block-header {
    margin-bottom: 25px;
    position: relative
  }

  .block-header>h2 {
    font-size: 15px;
    color: #777;
    margin: 0;
    font-weight: 400;
    text-transform: uppercase
  }
  @media (min-width:1280px) {
    #main {
      padding-left: 283px;
    }
  }

  @media (min-width:1200px) {
    .container {
      width: 100%
    }
  }

  @media screen and (max-width:991px) {
    .block-header {
      padding: 0 18px
    }
  }

  @media screen and (min-width:768px) {
    .block-header {
      padding: 0 22px
    }
  }

  @media (min-width:768px) and (max-width:1279px) {
    #main {
      padding-left: 15px;
    }
  }
</style>