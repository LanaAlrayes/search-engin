import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAos from 'vue-aos'
import 'animate.css'
import { ValidationProvider } from 'vee-validate'

axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.defaults.headers.Authorization = `Bearer ${store.state.token}`

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueAos)
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
