<template>
  <div class="form form_sm">
    <div class="form__group">
      <input type="text" class="form__control" v-model="numbers[0]" ref="numberInput"/>
    </div>
    <div class="form__group">
      <input type="text" class="form__control" v-model="numbers[1]" ref="numberInput"/>
    </div>
    <div class="form__group" v-for="(number, index) in numbers" :key="index">
      <input type="text" class="form__control"
             v-if="index > 1"
             v-model="numbers[index]"
             ref="numberInput"/>
    </div>
    <button class="btn btn_primary" @click="addNumber" :disabled="!numbersIsValid">Добавить</button>
  </div>
</template>

<script>
import bigInt from 'big-integer'

export default {
  name: 'NumberInput',
  props: ['onValid', 'onInvalid'],
  data () {
    return {}
  },
  computed: {
    numbers () {
      return this.$store.getters.numbers
    },
    numbersIsValid () {
      let isValid = false
      try {
        // положительное целое число
        isValid = this.numbers.filter(x => !/^\d+$/.test(x) || !bigInt(x).isPositive()).length === 0
      } catch (e) {
        isValid = false
      }
      if (isValid) {
        this.onValid()
      } else {
        this.onInvalid()
      }
      return isValid
    }
  },
  methods: {
    addNumber () {
      this.$store.dispatch('addNumber', '')
      setTimeout(() => {
        this.$refs.numberInput.pop().focus()
      }, 100)
    }
  },
  mounted () {
    this.$store.dispatch('setNumbers', ['', ''])
    this.$store.dispatch('setSum', null)
  }
}
</script>

<style scoped lang="scss">
</style>
