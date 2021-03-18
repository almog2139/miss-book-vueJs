import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/styles.scss'

import 'vue-material-design-icons/styles.css'
import { MdButton,MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMaterial from 'vue-material'
Vue.use(require('vue-moment'));
Vue.use(VueMaterial)
import VueMoment from 'vue-moment'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign ,faEuroSign,faShekelSign,faBook, faMapMarkedAlt, faBookOpen, faCheck, faTimes,faArrowCircleRight, faArrowCircleLeft,faAngleUp,faAngleDown,faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDollarSign)
library.add(faEuroSign)
library.add(faShekelSign)
library.add(faCheck)
library.add(faTimes)
library.add(faAngleUp)
library.add(faAngleDown)
library.add(faBook)
library.add(faBookOpen)
library.add(faArrowCircleRight)
library.add(faArrowCircleLeft)
library.add(faStar)

library.add(faMapMarkedAlt)
Vue.use(VueAxios, axios)

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
