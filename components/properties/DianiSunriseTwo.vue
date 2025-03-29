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
            v-if="current_image_source == '1.PNG'"
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/1.PNG`)"
          />
          <v-img
            v-if="current_image_source == '2.PNG'"
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/2.PNG`)"
          />
          <v-img
            v-if="current_image_source == '3.PNG'"
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/3.PNG`)"
          />
          <v-img
            v-if="current_image_source == '4.PNG'"
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/4.PNG`)"
          />
          <v-img
            v-if="current_image_source == '5.PNG'"
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/5.PNG`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4 no-gutters">
      <v-col class="offset-1 col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '1.PNG')}"
          @click="changeImageSource('1.PNG')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/1.PNG`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '5.PNG')}"
          @click="changeImageSource('5.PNG')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/5.PNG`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '2.PNG')}"
          @click="changeImageSource('2.PNG')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/2.PNG`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '3.PNG')}"
          @click="changeImageSource('3.PNG')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/3.PNG`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '4.PNG')}"
          @click="changeImageSource('4.PNG')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/sunrise_phase_2/4.PNG`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col class="col-12 col-md-10 offset-md-1">
        <ul>
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
  name: 'DianiSunriseTwo',

  data () {
    return {
      current_image_source: '1.PNG'
    }
  },

  methods: {
    changeImageSource (source) {
      this.current_image_source = String(source)
    }
  }
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
