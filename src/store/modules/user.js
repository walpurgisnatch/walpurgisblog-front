export const namespaced = true

export const state = {
  token: null
}

export const mutations = {
  SET(state, token) {
    state.token = token;
  },
  DELETE(state) {
    state.token = null
  }
}

export const actions = {
  logIn({ commit }, token) {
    commit('SET', token)
  },
  logout({ commit }) {
    commit('DELETE')
  }
}