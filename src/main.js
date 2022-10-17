import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueAos from 'vue-aos'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(VueAos)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
