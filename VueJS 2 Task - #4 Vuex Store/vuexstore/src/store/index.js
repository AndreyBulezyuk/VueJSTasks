import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      0: {
        id: 0,
        name: 'VueJS T-Shirt black',
        price: 39
      },
      1: {
        id: 1,
        name: 'VueJS T-Shirt white',
        price: 39
      },
      2: {
        id: 2,
        name: 'VueJS T-Shirt blue',
        price: 39
      }
    },
    cart: []
  },
  getters: {
    allProducts(state) {
      return state.products
    },
    getCartItems(state) {
      return state.cart
    }
  },
  mutations: {
    pushCart(state, payload){
      state.cart.push(payload)
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('pushCart', payload)
    }
  }
})
