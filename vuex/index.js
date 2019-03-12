import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from "./getters";
import state from './state';
import action from './actions';
Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    action,
    getters
});