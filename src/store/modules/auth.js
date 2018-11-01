import api from '../api/api';

const state = {
  authorization: {},
};

const getters = {

};

const actions = {
  newAuthorization(context, authorization) {
    context.commit('setAuthorization', authorization.authorization);
  },
};

const mutations = {
  setAuthorization(state, authorization) {
    state.authorization = authorization;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
