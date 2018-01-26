<template>
  <div>
    <mt-card title="输入框" >
      <mt-input placeholder="ABCD" value="123" inputSize="small" flag readonly></mt-input>
    </mt-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '123'
      }
    },
    methods: {
      click(val) {
        console.log(this.value)
      }
    }
  }
</script>

<style scoped>

</style>