/*
 * @Author: your name
 * @Date: 2019-12-31 11:31:33
 * @LastEditTime: 2019-12-31 11:43:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test\my\src\store\modules\login.js
 */
export default {
      // namespaced: true,
      state:{
            loginmodule:'login模块',
      },
      mutations:{
            SET_loginmodule(state,p){
                  state.loginmodule = p
            }
      }
}