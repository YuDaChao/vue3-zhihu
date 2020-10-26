import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home.vue')
  },
  {
    path: '/column/:id',
    name: 'ColumnDetail',
    component: () => import(/* webpackChunkName: 'column-detail' */ '@/views/columnDetail.vue')
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: () => import(/* webpackChunkName: 'post-detail' */ '@/views/postDetail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
