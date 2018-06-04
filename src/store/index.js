import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';
import head from './modules/head';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    head,
  },
  getters,
});

export default store;
