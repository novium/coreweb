import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  router,
  store,
  http: {},
  render: h => h(App),
}).$mount('#app');
