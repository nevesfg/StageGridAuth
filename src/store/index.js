import { createStore } from 'vuex'
import http from '../api/http.js';

export default createStore({
  state: {
    isAuthenticated: false,
    //Armazena o token pra verificar dps se o usuario esta logado ou nao
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    authenticateUser(state) {
      state.isAuthenticated = true;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      state.isAuthenticated = true; 
    },
    CLEAR_AUTH(state) {
      state.token = '';
      localStorage.removeItem('token');
      state.isAuthenticated = false;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await http.post('/login/', credentials);
        // console.log('Login response:', response);
        // console.log('AUTENTICADO:', this.state.isAuthenticated)
        commit('SET_TOKEN', response.data.token);
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    }
    ,
  logout({ commit }) {
    commit('CLEAR_AUTH');
  }
  },
  getters: {
  },
  modules: {
  }
})
