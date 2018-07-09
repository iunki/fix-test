const state = {
  isAuthorized: false,
  user: ''
}

const getters = {
  isAuthorized: state => state.isAuthorized,
  user: state => state.user
}

const actions = {
  setUser ({commit}, user) {
    commit('LOGIN', user)
  },
  logout ({commit}) {
    commit('LOGOUT')
  }
}

const mutations = {
  LOGIN (state, user) {
    state.isAuthorized = true
    state.user = user
  },
  LOGOUT (state) {
    state.isAuthorized = false
    state.user = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
