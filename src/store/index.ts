import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { a_login } from "../request/request.js";

export default new Vuex.Store({
  state: {
     logList:{}
  },
  mutations: {

  },
  actions: {
    ac_login({state},list){
      state.logList = list;
    }
  },
  // modules: {
  // }
})
