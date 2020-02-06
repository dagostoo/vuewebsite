import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import VShowSlide from 'v-show-slide'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VShowSlide)
