// TODO: Refactor

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import VueAxios from 'vue-axios';
import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';

import oauthclients from './modules/oauthclients';
import auth from './modules/auth';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const vueAuth = VueAuthenticate.factory(Vue.prototype.$http, {
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
      display: 'popup',
      popupOptions: { width: 527, height: 582 },
      responseParams: {
        code: 'code',
        clientId: 'client_id',
        redirectUri: 'redirect_uri',
        grantType: 'grant_type',
      },
    },
  },
});

const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    oauthclients,
    auth,
  },
  plugins: [vuexLocal.plugin],
  strict: debug,

  actions: {
    authenticate(context, provider) {
      let t = context;
      vueAuth.authenticate(provider).then(function (authorization) {
        context.dispatch({type: 'auth/newAuthorization', 
          authorization: authorization.data});
      });
    }
  }
});
