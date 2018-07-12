import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
import './utils/validator-config'

Vue.config.productionTip = false

const defaultTitle = 'Операция сложения'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || defaultTitle
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
