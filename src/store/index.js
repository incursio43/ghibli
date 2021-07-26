import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    film: {}
  },
  mutations: {
    setFilms (state, data) {
      state.films = data
    },
    setFilm (state, data) {
      state.film = data
    }
  },
  actions: {
    getFilms ({ commit }) {
      axios.get('https://ghibliapi.herokuapp.com/films').then((response) => {
        commit('setFilms', response.data)
      })
    },
    getFilm ({ commit }, id) {
      axios.get(`https://ghibliapi.herokuapp.com/films/${id}`).then((response) => {
        console.log(response)
        commit('setFilm', response.data)
      })
    }
  },
  modules: {
  }
})
