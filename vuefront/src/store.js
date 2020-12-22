import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token')
  },
  mutations: {
    getToken (state) {
      state.token = sessionStorage.getItem('token')
    },
    delToken (state) {
      sessionStorage.removeItem('token')
      state.token = null
    }
  },
  actions: {

  }
})