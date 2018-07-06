import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  panier : [],
}
const mutations = {
  VALIDATE_PANIER(state, payload){
    state.panier = payload
  }
}
const actions ={
  validatePanier({commit}, payload){
    commit('VALIDATE_PANIER', payload)
  }
}
const getters = {
  loadedPanier(state){
    return state.panier
  }
}
export const store = new Vuex.Store({
  state :state,
  mutations : mutations,
  getters : getters,
  actions : actions,
})
