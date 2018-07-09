<template>
  <div class="form_sm">
    <div class="form__group flex-between">
      <input type="text" class="form__control" v-model="search">
      <div class="btn">Сортировка</div>
    </div>
    <table class="table">
      <tr>
        <th>№</th>
        <th>Число</th>
      </tr>
      <tr v-for="(number, index) in filteredNumbers" :key="number">
        <td>{{index + 1}}</td>
        <td>{{number}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NumberCheck',
  data () {
    return {
      search: '',
      filteredNumbers: []
    }
  },
  computed: {
    numbers () {
      return this.$store.getters.numbers
    }
  },
  mounted () {
    this.filteredNumbers = this.numbers
  }
}
</script>

<style scoped lang="scss">
  .table {
    width: 100%;
    table-layout: fixed;
  }

  input {
    margin-right: 30px;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
