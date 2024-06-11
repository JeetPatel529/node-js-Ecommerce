import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index.vue')
    },
    {
      path: '/category',
      children: [
        {
          path: 'list',
          name: 'categoryIndex',
          component: () => import('@/pages/category/Index.vue')
        }
      ]
    },
    {
      path: '/products',
      children: [
        {
          path: 'list',
          name: 'productsIndex',
          component: () => import('@/pages/product/Index.vue')
        }
      ]
    }
  ]
})

export default router
