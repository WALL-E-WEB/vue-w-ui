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
import Subgroup from '@/view/subgroup'
import Alert from '@/view/subgroup/alert'
import Icon from '@/view/subgroup/icon'
import Menu from '@/view/subgroup/menu'

const router = new VueRouter({
      routes: [

            {
                  path: '/subgroup',
                  name: 'subgroup',
                  // component: () => import('@/view/subgroup'),
                  component: Subgroup,
                  children: [
                        {
                              path: 'alert',
                              name: 'alert',
                              // component: () => import('@view/subgroup/alert/index.vue')
                              component: Alert
                        },
                        {
                              path: 'icon',
                              name: 'Icon',
                              // component: () => import('@view/subgroup/alert/index.vue')
                              component: Icon
                        },
                        {
                              path: 'menu',
                              name: 'menu',
                              component: Menu
                        }
                  ]
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