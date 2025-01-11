<template>
  <div
    id="heroSection"
    class="pa-0 my-0 mx-0"
    style="z-index:02;"
  >
    <div style=" max-height: 70vh; width: 100vw">
      <v-img
        v-show="counter < 3"
        style="min-width: 100vw; max-height: 70vh;"
        class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/01.jpeg`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 3"
        style="min-width: 100vw; max-height: 70vh;"
        class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        :src="require(`../../assets/banners/02.png`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 4"
        style="min-width: 100vw; max-height: 70vh;"
        class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/03.png`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 5"
        style="min-width: 100vw; max-height: 70vh;"
        class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/04.png`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 6"
        style="min-width: 100vw; max-height: 70vh;"
        class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/05.png`)"
        @click="goSunrise"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data () {
    return {
      counter: 0,
      in_transit: false
    }
  },
  mounted () {
    setInterval(() => {
      if (this.counter < 6) {
        this.counter++
      } else {
        this.counter = 0
      }
    }, 4000)
  },
  methods: {
    goSunrise () {
      this.$router.push('/property/diani-sunrise-estate')
    }
  }
}
</script>
