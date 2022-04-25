import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Hmmmmmm... chyba to musim jakoś ominąć bo nie wiem czy to zassie.... testy potem ;)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//install bootstrapVue
Vue.use(BootstrapVue)
//Optionally install the BootstrapVue icon components plugin
Vue.use(IconPlugins)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
	}).$mount('#app)
	