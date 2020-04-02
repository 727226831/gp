import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'




Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // component: () => import(/* webpackChunkName: "login,register" */ '../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
  },
  {
    path: '/answer',
    name: 'Aswer',

    component: () => import(/* webpackChunkName: "home" */ '../components/student/Answer.vue'),

  },
  {
    path: '/make',
    name: 'Make',

    component: () => import(/* webpackChunkName: "home" */ '../components/teacher/Make.vue'),

  },
  {
    path: '/show',
    name: 'Show',

    component: () => import(/* webpackChunkName: "home" */ '../components/teacher/Show.vue'),

  },
  {
    path: '/admin',
    name: 'Admin',

    component: () => import(/* webpackChunkName: "home" */ '../components/admin/Admin.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
