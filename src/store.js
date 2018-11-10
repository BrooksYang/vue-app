import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: { name: 'Brooks', email: 'brooksyang@outlook.com' },
    },
    
    mutations: {
        logout(state) {
            state.user = '';
        },
    },
    
    actions: {
        logout: ({ commit }) => commit('logout'),
    },
});
