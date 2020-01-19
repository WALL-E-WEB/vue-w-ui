/*
 * @Author: your name
 * @Date: 2019-12-28 12:12:17
 * @LastEditTime : 2019-12-28 13:25:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\my\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const router = new VueRouter({
      routes: [

            {
                  path: '/home',
                  name: 'home',
                  component: () => import('@/view/home')
            },
            {
                  path: '/login',
                  name: 'login',
                  component: () => import('@/view/login')
            },
            {
                  path: '/dateCom',
                  name: 'dateCom',
                  component: () => import('@/view/dateCom')
            },
      ]
})
export default router