import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Signup from '@/views/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children:[
        {
          path: '',
          component: () => import('../views/Overview')
        },
        {
          path: '/profile',
          component: () => import('../views/Profile')
        },
        {
          path: '/about',
          component: () => import('../views/About')
        },
        {
          path: '/contact',
          component: () => import('../views/Contact')
        }
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }

  ]
})