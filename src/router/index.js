import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    props: true    
  },
  {
    path: '/article/create',
    name: 'CreateArticle',
    component: () => import('../views/CreateArticle.vue')
  },
  {
    path: '/article/:id/edit',
    name: 'EditArticle',
    component: () => import('../views/EditArticle.vue'),
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  const loggedIn = localStorage.getItem('user')

  if(routeTo.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/')
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
