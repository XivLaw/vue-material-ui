import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MtAdmin from '../packages/index';

Vue.use(MtAdmin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')