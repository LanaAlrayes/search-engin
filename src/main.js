import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueAos from 'vue-aos'
import { ValidationProvider } from 'vee-validate'
import 'animate.css'

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
