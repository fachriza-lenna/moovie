<template>
  <div class="home">
    <Slider />
    <DiscoverMovies />
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <h1 style="margin-top:10vh">hello world</h1> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from "./components/Slider"
import DiscoverMovies from "./components/DiscoverMovies"
export default {
  name: 'Home',
  components: {
    Slider,
    DiscoverMovies
  }
}
</script>
