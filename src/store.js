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

  },
  actions: {
    setAuthenticated(status) {
      this.authenticated = status;
    }

  }
})
