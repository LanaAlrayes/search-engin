import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/companies',
    name: 'Companies',
    component: () => import(/* webpackChunkName: "companies" */ '../views/CompaniesView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  },
  {
    path: '/searchCompany',
    name: 'SearchCompany',
    component: () => import(/* webpackChunkName: "search-company" */ '../views/SearchCompanyView.vue'),
  },
  {
    path: '/searchMedicine',
    name: 'SearchMedicine',
    component: () => import(/* webpackChunkName: "search-medicine" */ '../views/SearchMedicineView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/add-medicine',
    name: 'AddMedicineView',
    component: () => import(/* webpackChunckName: "add-medicine-view") */ '../views/AddMedicineView.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/data-medicine',
    name: 'DataMedicineView',
    component: () => import(/* webpackChunckName: "data-Medicine-view") */ '../views/DataMedicineView.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/add-companies',
    name: 'AddCompaniesView',
    component: () => import(/* webpackChunckName: "add-companies-view") */ '../views/AddCompaniesView.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/data-company',
    name: 'DataCompanyView',
    component: () => import(/* webpackChunckName: "data-company-view") */ '../views/DataCompanyView.vue'),
    meta: {
      auth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.state.token && to.meta.auth) { next('/login') } else next()
})

export default router
