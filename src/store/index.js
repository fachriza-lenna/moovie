import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vuex.Store.prototype.$axios = axios


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    gendres: []
  },
  getters: {
    getGenres(state){
      return state.genres
    }
  },
  mutations: {
    // increment (state, payload) {
    //   return state.count++
    // },
    SET_GENRES(state, payload) {
      state.genres = payload
    }
  },
  actions: {
    getGenres(context) {
      let baseUrl = process.env.VUE_APP_MOVIE_BASE_URL;
      let apiKey = process.env.VUE_APP_MOVIEDB_API_KEY
      this.$axios.get(`${baseUrl}genre/movie/list`, {
        params: {
          api_key: apiKey,
        }
      }).then((response) => {
        // console.log('genres : ', response.data.genres);
        context.commit("SET_GENRES", response.data.genres)
      })
    }
  }
})