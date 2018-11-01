import Vue from 'vue';
import Vuex from 'vuex';

import oauthclients from './modules/oauthclients';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    oauthclients,
    auth,
  },
  strict: debug,
});
