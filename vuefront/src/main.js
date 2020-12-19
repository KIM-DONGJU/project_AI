import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
