import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue} from 'bootstrap-vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import firebase from 'firebase/compat/app';
import './components/Foot.vue';

import 'leaflet/dist/leaflet.css';

import './registerServiceWorker'
//install bootstrapVue
Vue.use(BootstrapVue)
//Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapIconsPlugin)
Vue.config.productionTip = false


let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
});
