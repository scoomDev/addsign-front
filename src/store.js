import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    mockAccount: {
      email: "test@test.com",
      password: "test"
    }
  },
  mutations: {
    setAuthenticated(state) {
      console.log('set authenticated true')
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    }

  },
  actions: {

  }
})
