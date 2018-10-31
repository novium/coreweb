import api from '../api/api';

const state = {
  all: [],
};

const getters = {

};

const actions = {
  getAllClients(context) {
    return api.get('http://localhost:4001/api/oauth/list')
      .then(response => context.commit('setOauthClients', response))
      .catch(error => console.log(error));
  },
};

const mutations = {
  setOauthClients(state, clients) {
    state.all = clients;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
