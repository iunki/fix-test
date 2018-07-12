<template>
  <div>
    <table class="table">
      <tr>
        <th>№</th>
        <th>Число</th>
      </tr>
      <tr v-for="(number, index) in numbers" :key="index">
        <td>{{index + 1}}</td>
        <td :class="{'text-green': greater(number, 10)}">{{number}}</td>
      </tr>
    </table>

    <div class="result">
      <span>Результат: </span>
      <span :class="{'text-green': greater(sum, 10)}">{{sum.toString()}}</span>
    </div>

  </div>
</template>

<script>
import bigInt from 'big-integer'

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
  },
  methods: {
    greater (a, b) {
      return bigInt(a).greater(b)
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
  .text-green {
    color: $primary;
  }
</style>
