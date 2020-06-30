import Vue from  'vue'
import Vuex from 'vuex'
import total from './modules/total'
Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    total
  }
})

export default store
