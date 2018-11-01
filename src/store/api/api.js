import Vue from 'vue';
import axios from 'axios';

export default {
  get(url, request) {
    return axios.get(url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  post(url, request) {
    return axios.post(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  patch(url, request) {
    return axios.patch(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  delete(url, request) {
    return axios.delete(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
};
