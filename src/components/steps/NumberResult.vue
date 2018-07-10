<template>
  <div>
    <table class="table">
      <tr>
        <th>№</th>
        <th>Число</th>
      </tr>
      <tr v-for="(number, index) in numbers" :key="index">
        <td>{{index + 1}}</td>
        <td>{{number}}</td>
      </tr>
    </table>

    <div class="result">
      <span>Результат: </span>{{sum.toString()}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'NumberResult',
  data () {
    return {}
  },
  computed: {
    numbers () {
      return this.$store.getters.numbers
    },
    sum () {
      return this.$store.getters.sum
    }
  }
}
</script>

<style scoped lang="scss">
  .result {
    margin: 30px 0;
    word-break: break-all;
    font-size: 2em;
  }
</style>
