<template>
  <div class="row-header">
    <!-- <p>header</p> -->
    <div class="header">
      <img class="movie-logo" src="@/assets/images/moovietime-logo.svg" alt="">
      <div class="input-search">
        <img class="ic-movie" src="@/assets/images/iconfinder_movie.svg" alt="">
        <input v-model="input.search" class="search" placeholder="Find movie">
        <img class="ic-finder" src="@/assets/images/iconfinder.svg" alt="">
      </div>
      <div class="nav-list">
        <ul>
          <li style="display:flex;"><a style="margin-left:1vw;" href=""><img src="@/assets/images/iconfinder_view-grid.svg" class="ic-view-grid" alt=""> CATEGORIES</a></li>
          <li><a href=""> MOVIES</a></li>
          <li><a href=""> TV SHOW</a></li>
          <li><a href=""> LOGIN</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      input: {
        search: ''
      }
    }
  }
}
</script>



<style lang="scss" scoped>
.movie-logo {
  margin-right: 2vw;
  width: 6.5vw;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #E5E5E5;
  opacity: 1; /* Firefox */
}
.ic-view-grid {
  position: relative;
  vertical-align: middle;
  margin-right: 0.5vw;
}
.ic-movie{
  position: relative;
  width: 24px;
  height: auto;
  left: 2.5vw;
}
.ic-finder{
  position: relative;
  margin: 0 auto;
  vertical-align:middle;
  right: 2vw;
}
.input-search{
  // position: relative;
  display: flex;
  // width: 35%;

  margin-top: auto;
  margin-bottom: auto;
  // color: white !important;
}
.search {
  font-family: 'Montserrat';
  // width: 100%;
  width: 500px;
  height: 6vh;
  // background-color: white;
  padding-left: 3.5vw;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  border-radius: 4px;
  border: none;
  // background: rgba(0, 0, 0, 0.13);
  background: #24282f;
  // margin-right: 1vw;
  color: white;


}
.nav-list {
  display: flex;
  margin-left: 1vw;
  margin-top: auto;
  vertical-align: middle;
  margin-bottom: auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #E5E5E5;
}

.row-header {
  font-family: 'Montserrat';
  display: flex;
  // position: relative;
  justify-content: center;
  // justify-items: center;
  width: 100%;
  height: 10vh;
  background-color: #292e35;
}
.header {
  display: flex;
  justify-content: center;
  width: 90%;
  height: 100%;
  // border-color: cyan;
}

</style>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #333; */
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>