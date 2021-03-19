import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/giaodien.css'
import jquery from 'jquery';
Vue.config.productionTip = false
Vue.prototype.jquery = jquery
new Vue({
  router,
  jquery,
  render: h => h(App)
}).$mount('#app')
