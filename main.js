import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$store = store;
App.mpType = 'app';
Vue.prototype.$eventBus = new Vue();

const app = new Vue({
	store,
	...App
})
app.$mount()
