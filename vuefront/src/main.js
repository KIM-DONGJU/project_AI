import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

// import { router } from './router/index.js'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
