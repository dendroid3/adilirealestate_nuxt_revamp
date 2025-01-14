<template>
  <div
    id="heroSection"
    class="pa-0 my-0 mx-0"
    style="z-index:02;"
  >
    <div class="main-div">
      <v-img
        v-show="counter < 3"
        class="rounded banner-image  lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/01.jpeg`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 3"
        class="rounded banner-image lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        :src="require(`../../assets/banners/02.png`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 4"
        class="rounded banner-image lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/03.png`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 5"
        class="rounded banner-image lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/04.png`)"
        @click="goSunrise"
      />

      <v-img
        v-show="counter == 6"
        class="rounded banner-image lighten-4 ma-0 pointer animate__animated animate__fadeIn"
        contain
        :src="require(`../../assets/banners/05.png`)"
        @click="goSunrise"
      />

      <div
        v-if="!isMobile"
        class="pa-2 d-flex justify-center inner-text"
      >
        <div class="blue white--text rounded pa-1">
          <div>
            Our show house is under construction in Pazurina’s maiden project, the Pazurina golf resort! With plots 99% sold out, this project is a true definition of Pazurina’s dedication to delivering real estate investment dreams.
            Our show house is under construction in Pazurina’s maiden project, the Pazurina golf resort! With plots 99% sold out, this project is a true definition of Pazurina’s dedication to delivering real estate investment dreams.
          </div>
        </div>
      </div>
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

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xsOnly
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
<style scoped>
.main-div {
  width: 100vw;
  position: relative;
}

.banner-image {
  min-width: 100vw;
  max-height: 70vh;
}

.inner-text {
  position: absolute;
  bottom: 0;
  right: 3rem;
  left: 3rem;
}

@media screen and (min-width: 600px) {
.main-div {
  height: 70vh;
}
}
</style>
