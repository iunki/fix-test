import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import AdditionOperation from '@/pages/AdditionOperation'
import AuthService from '@/services/AuthService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/addition',
      name: 'Addition',
      component: AdditionOperation,
      beforeEnter: AuthService.requireAuth
    }
  ]
})
