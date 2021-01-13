import axios from 'axios'
export const state = () => ({
  products: [],
  shops: []

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
  },

  shops(state) {
    return state.shops
  }
}
export const mutations = {
  SET_PRODUCTS(state, data){
    state.products = data
  },
  SET_SHOPS(state, data) {
    state.shops = data
  }
}
export const actions = {
  async getProducts({commit}){
    try {
        let response = await axios.get('https://jumga-flutterwave-solution-api.herokuapp.com/api/products')
        commit ('SET_PRODUCTS', response.data.data)
    } catch (e) {
        commit('SET_PRODUCTS', null)
    }
  },
  async getShops({commit}){
    try {
        let response = await axios.get('https://jumga-flutterwave-solution-api.herokuapp.com/api/stores')
        commit ('SET_SHOPS', response.data.data)
    } catch (e) {
        commit('SET_SHOPS', null)
    }
  }
}
