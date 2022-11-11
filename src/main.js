import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  Vuex,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
