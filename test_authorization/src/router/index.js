import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      query:{
        next:''
      },
      component: Login
    },
    {
      path: '/pageA',
      name: 'PageA',
      query:{
        auth:''
      },
      component: PageA
    },
    {
      path: '/pageB',
      name: 'PageB',
      query:{
        auth:''
      },
      component: PageB
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
