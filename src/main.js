import Vue from 'vue';

import VueAxios from 'vue-axios';
import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080',

  providers: {
    oauth2: {
      url: 'http://localhost:4001/oauth/v1/token',
      authorizationEndpoint: 'http://localhost:4001/oauth/v1/authorize',
      clientId: 'a1ed474f-f01d-4886-8d7b-b3ee63534608',
      redirectUri: 'http://localhost:8080/auth/oauth2',
      defaultUrlParams: ['response_type', 'client_id', 'redirect_uri', 'scope'],
      oauthType: '2.0',
      responseType: 'code',
      responseParams: {
        code: 'code',
        clientId: 'client_id',
        redirectUri: 'redirect_uri',
        grantType: 'grant_type',
      },
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
