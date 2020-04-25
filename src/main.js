import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import VShowSlide from 'v-show-slide'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueScrollactive from 'vue-scrollactive'
import emailjs from "emailjs-com"
import VueSweetalert2 from 'vue-sweetalert2'; 

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-scrollactive', VueScrollactive)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app');

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};
 
Vue.use(VueSweetalert2, options);
Vue.use(VShowSlide);
Vue.use(VueScrollactive);
Vue.use(emailjs);



