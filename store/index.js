import axios from 'axios'
export const state = () => ({
  products: [],

})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  products(state) {
    return state.products
  }
}
export const mutations = {
  SET_PRODUCTS(state, data){
    state.products = data
  }
}
export const actions = {
  async getProducts({commit}){
    try {
        let response = await axios.get('https://jumga-flutterwave-solution-api.herokuapp.com/api/products')
        commit ('SET_PRODUCTS', response.data)
    } catch (e) {
        commit('SET_PRODUCTS', null)
    }
  },
}
