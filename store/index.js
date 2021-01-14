import axios from 'axios'
export const state = () => ({
  products: [],
  shops: [],
  cart: []

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
  },

  cart(state) {
    return state.cart
  },

  cartItemCount(state) {
    return state.cart.length
  },

  cartTotalPrice(state) {
    let total = 0;
    state.cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    return total
  },

  checkoutTotalPrice(state) {
    let total = 0;
    state.cart.forEach(item => {
      total += (item.product.price * item.quantity)
    })
    return total+20
  }
}
export const mutations = {
  SET_PRODUCTS(state, data){
    state.products = data
  },
  SET_SHOPS(state, data) {
    state.shops = data
  },
  ADD_TO_CART(state, {product, quantity}) {

    let productInCart = state.cart.find(item => {
      return item.product.id === product.id
    });
    if (productInCart){
      productInCart.quantity += quantity
      return;
    }
    state.cart.push({
      quantity,
      product,
    })
  },
  REMOVE_PRODUCT_FROM_CART (state, product) {
    state.cart = state.cart.filter(item => {
      return item.product.id !== product.id;
    })
  },
  CLEAR_CART (state) {
    state.cart = [];
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
  },
  addProductToCart({commit}, {product, quantity}) {
    commit ('ADD_TO_CART', {product, quantity})
  },
  removeProductFromCart({commit}, product) {
    commit ('REMOVE_PRODUCT_FROM_CART', product)
  },
  clearCart({commit}) {
    commit ('CLEAR_CART') 
  }
}
