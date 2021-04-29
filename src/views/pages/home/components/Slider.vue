<template>
  <div class="wrapper-slider">
    <div class="card-slider" v-for="(trend, i) in trendings" :key="i">
      <div class="poster-wrapper" >
        <img :src="imgUrl+trend.poster_path" class="poster" alt="">
      </div>
      <div class="card-body-wrapper">
        <div class="card-body">
          <div style="display: flex; vertical-align:middle;">
            <img src="@/assets/images/Star.svg" alt=""><strong style="margin-left:5px;">{{ trend.vote_average}}</strong>
          </div>
          <h2><strong>{{trend.title}}</strong> </h2>
          <p>{{formatYear(trend.release_date)}} • {{setGendre(trend.genre_ids[0])}}</p>
          <small>{{trend.overview}}</small>
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
      imgUrl: process.env.VUE_APP_MOVIE_IMAGE_BASE_URL,
      apiKey: process.env.VUE_APP_MOVIEDB_API_KEY,
      trendings: []
    }
  },
  computed:{
    ...mapGetters([
      'getGenres'
    ])
  },
  created(){
    // console.log('env : ', process.env.VUE_APP_MOVIE_IMAGE_BASE_URL);
    // console.log('asda : ', process.env.VUE_APP_TITLE);
    this.getTrendMovie();
    // console.log('getGenres created : ', this.getGenres);
  },
  methods: {
    getTrendMovie(){
      this.$axios.get(`${this.baseUrl}trending/movie/day`, {
        params: {
          api_key: this.apiKey
        }
      }).then((response) => {
        response = response.data.results
        this.trendings = response
        // console.log('response : ', response);
      }).catch((error) => {
        console.log('error : ', error);
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
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-slider {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  // position: relative;
  // width: 100%
  // max-width: ;
  display: flex;

  // flex-direction: row;
  background-color: #1e232b;
  overflow-x: auto;
  // border: solid;
}
.card-slider {
  display: flex;
  min-width: 600px;
  min-height: 324px;
  margin: 2vw;
  margin-bottom: 8vh;
  // vertical-align: middle;
  align-items: center;
  // background-color: rgb(245, 218, 245);
  // border: 1px solid white;
}
.poster-wrapper {
  // width: 243.08px;
  min-height: 364.61px;
}
.poster {
  max-width: 243.08px;
  // max-height: 364.61px;
}
.card-body-wrapper{
  min-width: 350px;
  min-height: 300px;
  background-color: black;
  color: white;
}
.card-body{
  margin: 20px;
  max-height: 300px;
  overflow-y: auto;
}
</style>