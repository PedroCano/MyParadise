import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design.vue')
  },
  {
    path: '/design2',
    name: 'Design2',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design2.vue')
  },
  {
    path: '/design3',
    name: 'Design3',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design3.vue')
  },
  {
    path: '/design4',
    name: 'Design4',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design4.vue')
  },
  {
    path: '/design5',
    name: 'Design5',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design5.vue')
  },
  {
    path: '/design6',
    name: 'Design6',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design6.vue')
  },
  {
    path: '/design7',
    name: 'Design7',
    component: () => import(/* webpackChunkName: "about" */ '../views/design/Design7.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Register.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
