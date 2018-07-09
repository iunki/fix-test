const state = {
  numbers: []
}

const getters = {
  numbers: state => state.numbers
}

const actions = {
  setNumbers ({commit}, numbers) {
    commit('SET_NUMBERS', numbers)
  },
  addNumber ({commit}, number) {
    commit('ADD_NUMBER', number)
  }
}

const mutations = {
  ADD_NUMBER (state, number) {
    state.numbers.push(number)
  },
  SET_NUMBERS (state, numbers) {
    state.numbers = numbers
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
