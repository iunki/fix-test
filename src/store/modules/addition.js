const state = {
  numbers: [],
  summ: null
}

const getters = {
  numbers: state => state.numbers,
  sum: state => state.summ
}

const actions = {
  setNumbers ({commit}, numbers) {
    commit('SET_NUMBERS', numbers)
  },
  addNumber ({commit}, number) {
    commit('ADD_NUMBER', number)
  },
  setSum ({commit}, value) {
    commit('SET_SUM', value)
  }
}

const mutations = {
  ADD_NUMBER (state, number) {
    state.numbers.push(number)
  },
  SET_NUMBERS (state, numbers) {
    state.numbers = numbers
  },
  SET_SUM (state, value) {
    state.summ = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
