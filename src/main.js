import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

require('./utils/validator-config')

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
