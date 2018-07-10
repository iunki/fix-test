<template>
  <div>
    Производится расчет...
  </div>
</template>

<script>
import bigInt from 'big-integer'

export default {
  name: 'NumberCalculation',
  mounted () {
    const numbers = this.$store.getters.numbers
    let sum = numbers.reduce((res, val) => bigInt(res).plus(bigInt(val)))
    this.$store.dispatch('setSum', sum)
  }
}
</script>

<style scoped>
  div {
    font-size: 20px;
  }
</style>
