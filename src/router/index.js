//createRouter 创建router实例
//createWebHistory 创建history 式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layouts/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'


import Category from '@/views/category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/subCategory/index.vue')
        },{
          path: 'detail/:id',
          component: () => import('@/views/detail/index.vue')
          
        }
      ]
    },{
      path: '/login',
      component: Login
    }
   
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
