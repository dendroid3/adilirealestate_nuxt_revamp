<template>
  <div>
    <v-row class="mb-4">
      <v-col class="col-12 text-center blue--text d-flex flex-wrap pa-0 justify-center" style="white-space: nowrap;">
        <p class="d-flex justify-center text--center blue--text heading ma-0">
          Diani Sunrise Estate II
        </p>
      </v-col>
      <v-col class="col-12 d-flex justify-center text-center blue--text flex-wrap pa-0 justify-center">
        <div class="pa-0 image-div">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/1.jpg`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4 no-gutters">
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/5.jpg`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/2.jpg`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/3.jpg`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/4.jpg`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col class="col-12 col-md-10 offset-md-1 text-center">
        <ul class="text-center">
          <li>✅Prime Location - 4KM to the beach</li>
          <li>✅1KM to the highway - 4 Min drive</li>
          <li>✅Gated and Secure community</li>
          <li>✅Serene thriving neighborhood</li>
          <li>✅Close to 5-star hotels, schools, and amenities</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'DianiSunriseTwo'
}
</script>

<style scoped>
 .property-image {
    min-width: 100vw;
    max-height: 70vh;
 }

 ul {
  list-style-position: inside;
  list-style-type: none;
 }
</style>
