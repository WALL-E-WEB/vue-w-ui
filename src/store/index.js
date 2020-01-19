/*
 * @Author: your name
 * @Date: 2019-12-28 14:21:18
 * @LastEditTime : 2019-12-31 12:29:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\my\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutation'
import actions from './actions'
import modules from './modules'

// import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)
const store = new Vuex.Store({
      state,
      mutations,
      actions,
      modules,
      // plugins: [createPersistedState({
      //       storage: window.localStorage
      // })]
})

export default store