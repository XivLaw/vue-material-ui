<template>
  <section id="main">
    <div class="mt-container clearfix">
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