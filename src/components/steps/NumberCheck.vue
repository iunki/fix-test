<template>
  <div class="form">
    <div class="form__group flex-between filters">
      <input type="text" class="form__control" v-model="search" @input="filterNumbers" placeholder="Поиск">
      <div class="select-wrapper">
        <select class="form__control" v-model="sorting" @change="filterNumbers">
          <option value="">Без сортировки</option>
          <option value="1">По возрастанию</option>
          <option value="-1">По убыванию</option>
        </select>
      </div>
    </div>
    <table class="table">
      <tr>
        <th>№</th>
        <th>Число</th>
      </tr>
      <tr v-for="(number, index) in filteredNumbers">
        <td>{{index + 1}}</td>
        <td>{{number}}</td>
      </tr>
      <tr v-if="!filteredNumbers.length">
        <td></td>
        <td>Не найдено.</td>
      </tr>
    </table>
  </div>
</template>

<script>
import bigInt from 'big-integer'

export default {
  name: 'NumberCheck',
  data () {
    return {
      search: '',
      sorting: '',
      filteredNumbers: []
    }
  },
  computed: {
    numbers () {
      return this.$store.getters.numbers
    }
  },
  methods: {
    filterNumbers () {
      console.log('asd')
      this.filteredNumbers = this.numbers.filter(x => x.includes(this.search)).sort((a, b) => {
        switch (this.sorting) {
          case '1':
            return bigInt(a).minus(b)
          case '-1':
            return bigInt(b).minus(a)
        }
      })
      console.log('qwe')
    }
  },
  mounted () {
    this.filteredNumbers = this.numbers
  }
}
</script>

<style scoped lang="scss">
  .form {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  input {
    margin-bottom: 20px;
  }

  .select-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 40px;
    select {
      width: 200px;
      margin-bottom: 20px;
    }
  }

  @media all and (max-width: 790px) {
    .filters {
      flex-wrap: wrap;
    }
    .select-wrapper {
      margin-left: 0;
    }
  }
</style>
