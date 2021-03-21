import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/giaodien.css'
import jquery from 'jquery';
import fontawesome from 'fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false
Vue.prototype.jquery = jquery
new Vue({
    router,
    jquery,
    fontawesome,
    render: h => h(App)
}).$mount('#app')