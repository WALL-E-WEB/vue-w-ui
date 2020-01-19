/*
 * @Author: your name
 * @Date: 2019-12-31 11:31:40
 * @LastEditTime : 2020-01-02 09:41:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\my\src\store\modules\home.js
 */
export default {
      namespaced: true,
      state:{
            homemodule:'home模块'
      },
      mutations:{
            SET_homemodule(state,p){
                  state.homemodule = p
            }
      }
}