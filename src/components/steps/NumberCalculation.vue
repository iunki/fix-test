<template>
  <div>

  </div>
</template>

<script>
import bigInt from 'big-integer'

export default {
  name: 'NumberCalculation',
  props: ['onStarted', 'onFinished'],
  mounted () {
    this.onStarted()
    const numbers = this.$store.getters.numbers
    let sum = numbers.reduce((res, val) => bigInt(res).plus(bigInt(val)))
    this.$store.dispatch('setSum', sum)
    setTimeout(() => {
      this.onFinished()
    }, 5000)
  }
}
</script>

<style scoped>

</style>
