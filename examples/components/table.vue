<template>
  <div>
    <mt-card title="标准表格" minTitle="需要传入 column 属性作为列名， data 属性作为数据">
      <mt-table :column="column" :data="data"></mt-table>
    </mt-card>
    <mt-card title="条纹表格" minTitle="需要传入 striped 属性">
      <mt-table :column="column" :data="data" striped></mt-table>
    </mt-card>
    <mt-card title="边框表格" minTitle="需要传入 bordered 属性">
      <mt-table :column="column" :data="data" bordered></mt-table>
    </mt-card>
    <mt-card title="Hover表格" minTitle="需要传入 hover 属性">
      <mt-table :column="column" :data="data" hover></mt-table>
    </mt-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        column: [
          {
            name: '#',
            key: 'num'
          },
          {
            name: '名称',
            key: 'name'
          }
          ,
          {
            name: '英文名',
            key: 'ename'
          }
          ,
          {
            name: '价格',
            key: 'price'
          }
          ,
          {
            name: '数量',
            key: 'have'
          }
        ],
        data: [
          {
            num: 1,
            name: '苹果',
            ename: 'Apple',
            price: '￥2',
            have: 1000
          },
          {
            num: 2,
            name: '橙子',
            ename: 'Orange',
            price: '￥2.5',
            have: 4100
          },
          {
            num: 3,
            name: '梨子',
            ename: 'Pear',
            price: '￥3',
            have: 7422
          },
          {
            num: 4,
            name: '香蕉',
            ename: 'Banana',
            price: '￥5',
            have: 8000
          },
          {
            num: 5,
            name: '火龙果',
            ename: 'Pitaya',
            price: '￥8',
            have: 5214
          },
          {
            num: 6,
            name: '柠檬',
            ename: 'Lemon',
            price: '￥10',
            have: 200
          },
          {
            num: 7,
            name: '葡萄',
            ename: 'grape',
            price: '￥15',
            have: 300
          }
        ]
      }
    },
  }
</script>

<style scoped>

</style>