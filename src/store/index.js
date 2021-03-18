import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from './modules/book.module'
import userModule from './modules/user.module'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    msg:''
  },
  getters:{
    msg(state){
      console.log('ststtt',state.msg);
      return state.msg
    }
  },
  mutations: {
    showMsg(state,{msg}){
     state.msg=msg
     console.log('msgg state',state.msg);
    }
  },
  actions: {
    showMsg({ commit },  msg ) {
      console.log('msggg',msg);
      commit({ type: 'showMsg', msg })
      setTimeout(() => {
        commit({ type: 'showMsg', msg: '' })
      }, 3000);
    },
  },
  modules: {
    bookModule,
    userModule
  }
})
