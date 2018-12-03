import Vue from 'vue'
import Vuex, { createNamespacedHelpers } from '../../../index'
import { cart, CartState } from './modules/cart'
import { products, ProductsState } from './modules/products'

Vue.use(Vuex)

export interface RootState {
  cart: CartState
  products: ProductsState
}

export const rootHelpers = createNamespacedHelpers<RootState, {}, {}, {}>()

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
})
