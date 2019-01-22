import api from '../api/api';
import axios from 'axios';

const state = {
  token: undefined
};

const getters = {
};

const actions = {
  newAuthorization(context, token) {
    context.commit('setAuthorization', token);
  }
};

const mutations = {
  setAuthorization(state, token) {
    state.token = token;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
