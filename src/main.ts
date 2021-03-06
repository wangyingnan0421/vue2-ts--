import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//axios
import axios from 'axios';
Vue.prototype.$axios = axios;
//baseUrl
Vue.prototype.$baseUrl = '/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
