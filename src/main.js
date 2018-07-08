import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'

require('./utils/validator-config')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
