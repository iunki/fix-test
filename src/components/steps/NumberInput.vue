<template>
  <div class="form form_sm">
    <div class="form__group">
      <input type="text" class="form__control" v-model="numbers[0]" ref="numberInput"/>
    </div>
    <div class="form__group">
      <input type="text" class="form__control" v-model="numbers[1]" ref="numberInput"/>
    </div>
    <div class="form__group" v-for="(number, index) in numbers" :key="index">
      <input type="text" class="form__control" v-if="index > 1" v-model="numbers[index]" ref="numberInput"/>
    </div>
    <button class="btn btn_primary" @click="addNumber" :disabled="!numbersIsValid">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  data () {
    return {}
  },
  computed: {
    numbers () {
      return this.$store.getters.numbers
    },
    numbersIsValid () {
      return this.numbers.filter(x => Math.sign(x) !== 1).length === 0
    }
  },
  methods: {
    addNumber () {
      this.$store.dispatch('addNumber', '')
    }
  },
  mounted () {
    this.$store.dispatch('setNumbers', ['', ''])
  }
}
</script>

<style scoped lang="scss">
</style>
