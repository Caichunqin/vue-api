import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// const lazyload = component => () => import(`./views/${component}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

  // {
  //   path: '/404',
  //   component: lazyload('404'),
  //   meta: {
  //     requireAuth: true
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (
//     to.matched.some(record => record.meta.requireAuth) &&
//     !localStorage.getItem('token')
//   ) {
//     toLogin()
//     return
//   }
//   next()
// })

export default router
