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
          path: '/category',
          component: Category
        }
      ]
    },{
      path: '/login',
      component: Login
    }
   
  ],
})

export default router
