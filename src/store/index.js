import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page_header_context: '首页',
  },


  mutations: {
    set_page_header_context(state,context){
      this.state.page_header_context = context;
    },
  },

  //异步操作
  actions: {
    set_page_header_context(context){
      this.state.page_header_context = context;
    },
  },
  modules: {
  }
})
