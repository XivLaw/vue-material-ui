<template>
  <section id="main">
    <div class="mt-container">
      <div class="mt-block-header">
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
    padding-right: 15px;
  }
  .mt-container {
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .mt-container:after,.mt-container:before {
    content: " ";
    display: table;
  }
  .mt-container:after {
    clear: both;
  }
  .mt-block-header {
    margin-bottom: 25px;
    position: relative;
  }

  .mt-block-header>h2 {
    font-size: 15px;
    color: #777;
    margin: 0;
    font-weight: 400;
    text-transform: uppercase;
  }
  @media (min-width:1280px) {
    #main {
      padding-left: 283px;
    }
  }

  @media (min-width:1200px) {
    .mt-container {
      width: 100%;
    }
  }
  @media (min-width:768px) and (max-width:1279px) {
    #main {
      padding-left: 15px;
    }
  }
  @media screen and (max-width:991px) {
    .mt-block-header {
      padding: 0 18px;
    }
  }

  @media screen and (min-width:768px) {
    .mt-block-header {
      padding: 0 22px;
    }
  }

  @media screen and (max-width:425px) {
    #main {
      padding-right: 0;
    }
  }
</style>