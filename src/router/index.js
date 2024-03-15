import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DashboardPage from '../views/DashboardView.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // meta: { requiresAuth: true },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
    // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
