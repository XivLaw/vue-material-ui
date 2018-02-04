<template>
  <div class="mt-table-block">
    <table 
      class="mt-table"
      :class="{
        'mt-table-hover': hover,
        'mt-table-striped': striped,
        'mt-table-bordered': bordered
      }"
    >
      <thead>
        <tr>
          <th v-for="val in column">{{val.name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="val in data">
          <td v-for="v in column">
            {{val[v.key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'MtTable',
    props: {
      data: {
        type: Array,
        default: []
      },
      column: {
        type: Array,
        default: []
      },
      hover: Boolean,
      striped: Boolean,
      bordered: Boolean
    }
  }
</script>