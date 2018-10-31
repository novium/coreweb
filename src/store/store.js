import Vue from 'vue';
import Vuex from 'vuex';

import oauthclients from './modules/oauthclients';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    oauthclients,
  },
  strict: debug,
});
