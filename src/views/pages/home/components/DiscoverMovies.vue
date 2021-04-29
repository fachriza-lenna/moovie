<template>
  <div id="discover-movies">
    <div class="wrapper-discover">
      <div class="discover-header">
        <div class="square"></div>
        <div class="header-body">
          <div id="hb-left">
            <p style="margin-top:10px;">Discover Movies</p>
          </div>
          <div id="hb-right" style="width:400px; display:flex; vertical-align:middle;">
            <p style="margin:5px 20px 10px 10px">My Movies </p>
            <div class="my-movies-count">
              <p style="margin-top:auto; margin-bottom:auto;"><b style="font-style: normal;font-weight: 600;">{{moviesCount}}</b>&nbsp; movies</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper-discover-movies">
      <div class="discover-row">
        <div class="discover-filter">
          <h5>Sort Result by</h5>
          <h5>default popularity</h5>
        </div>
        <div class="discover-list">
          <div class="movie-list" v-for="(m,i) in movies" :key="i">

            <div v-if="m.id !== hoverId" class="movie-img" @mouseover="hoverImg(m.id)">
              <div class="rate-img">
                <p style="margin:0;">9.0</p>
              </div>
              <img style="max-width:100%;" :src="imgUrl+m.poster_path" alt="">
            </div>

            <div v-else class="movie-img-hover">
              <div class="hover-data">
                  <div class="star-rate">
                    <img src="@/assets/images/Star.svg" width="28px;" height="28" alt="">
                    <p style="margin: 0 0 0 10px"> {{m.vote_average}}</p>
                  </div>
                  <div class="action-hover">
                    <p style="margin:0; font-size:16px;">{{setGendre(m.genre_ids[0])}}</p>
                  </div>
                  <div class="button-hover">
                    <div class="btn-view">
                      VIEW
                    </div>
                    <div class="btn-add" :style="addedIndex == i ? 'background:#A9FFC6; color:black;' : ''" @click="addMovies(1, i)">
                      {{addedIndex == i ? 'ADDED' : 'ADD'}}
                    </div>
                  </div>
              </div>
            </div>

            <div class="">
              <p style="font-size: 14px; margin: 5px 0 0 0;">{{subString(m.title)}}</p>
              <p style="color: #929292; font-size:10px; margin:0;">{{formatYear(m.release_date)}}</p>
            </div>

          </div>
        </div>
      </div>



    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      baseUrl: process.env.VUE_APP_MOVIE_BASE_URL,
      apiKey: process.env.VUE_APP_MOVIEDB_API_KEY,
      imgUrl: process.env.VUE_APP_MOVIE_IMAGE_BASE_URL,
      moviesCount: 0,
      movies: [],
      hoverId: null,
      addedIndex: null,
    }
  },
  computed:{
    ...mapGetters([
      'getGenres'
    ])
  },
  created(){
    this.getDiscoverMovie();
  },
  methods: {
    getDiscoverMovie(sort = "popularity.desc", genre = 28){ //28 is action genre
      this.$axios.get(`${this.baseUrl}discover/movie`, {
        params: {
          api_key: this.apiKey,
          language: "en-US",
          sort_by: sort,
          include_adult: false,
          include_video: false,
          page: 1,
          with_watch_monetization_types: "flatrate",
          with_genres: genre
        }
      }).then((response) => {
        response = response.data.results
        this.movies = response
        // console.log('response : ', response);
      })
    },
    formatYear(value){
      let d = new Date(value)
      return d.getFullYear()
    },
    setGendre(id){
      const genres = this.getGenres;
      for (let i = 0; i < genres.length; i++) {
        const el = genres[i];
        if (el.id == id) {
          return el.name
        }
      }
    },
    subString(str){
      // console.log('string : ', str);
      if(str.length > 10){
        return str = str.substring(0,22) + "...";
      } else {
        return str;
      }
    },
    hoverImg(id){
      // console.log('title : ', id);
      this.hoverId = id
    },
    addMovies(value, i) {
      this.addedIndex = i
      this.moviesCount = this.moviesCount+value
    }
  }
}
</script>


<style lang="scss" scoped>
.wrapper-discover {
  font-family: 'Montserrat';
  display: flex;
  background-color: #292e35;

  color: #E5E5E5;
}
.discover-header {
  width: 100%;
  margin: 60px;
  margin-top: 80px;
  min-height: 333px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  // display: flex;
}
.header-body {
  display: flex;
  justify-content: space-between;
}
.square {
  width: 112px;
  height: 6px;
  background: #E74C3C;
  margin-left: 3px;
}
.my-movies-count {
  font-family: "Montserrat";
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  width: 140px;
  height: 42px;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  text-align: center;
}



.wrapper-discover-movies {
  font-family: 'Montserrat';
  position: relative;
  display: flex;
  background-color: #1e232b;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #E5E5E5;
}
.discover-row {
  position: relative;
  display: flex;
  width: 100%;
  top: -300px;
  margin-top: 80px;
  margin: 60px;
  min-height: 333px;
  // border: 1px solid;
}
.discover-filter {
  width: 20%;
  margin: 10px;
  // border: 1px solid;
}
.discover-list {
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  max-width: 85%;
  height: auto;
  margin: 10px;
  // border: 1px solid;
}
.movie-list {
  width: 21%;
  max-height: 100%;
  margin: 10px;
  // border: 1px solid;
}
.movie-img {
  position: relative;
  height: 330px;
  // display: flex;
  // height: 80%;
  // margin: 5px;
  // border: 1px solid;
}
.movie-img-hover {
  display: flex;
  justify-content: center;
  // margin: 10px;
  background: #2e2e2e;
  height: 321.05px;
}
.hover-data {
  display: flex;
  flex-direction: column;
}
.rate-img{
  display: flex;
  justify-content: center;
  margin: 0;
  position: absolute;
  right: 0;
  width: 48px;
  height: 32px;
  background: rgba(30, 35, 43, 0.8);
}
.star-rate {
  display: flex;
  // flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  width: 170px;
  height: 40px;
  // border: 1px solid;
}
.action-hover {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 170px;
  height: 40px;
  // border: 1px solid;
}
.button-hover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  width: 170px;
  height: 100px;
  // border: 1px solid;
}
.btn-view {
  width: 107px;
  height: 32px;
  font-size: 14px;
  text-align: center;
  // left: 57px;
  // top: 202px;
  cursor: pointer;
  background: #FF0000;
  border-radius: 32px;
}
.btn-add {
  width: 107px;
  height: 32px;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  border-radius: 32px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  cursor: pointer;
  // background: rgba(0, 0, 0, 0.8);
}
</style>

<style scoped>
b {
  font-family: monospace !important;
  font-weight: bold;
  font-size: 16px;
}
</style>