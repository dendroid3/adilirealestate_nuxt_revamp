<template>
  <div>
    <v-row class="mb-4">
      <v-col class="col-12 text-center blue--text d-flex flex-wrap pa-0 justify-center" style="white-space: nowrap;">
        <p class="d-flex justify-center text--center blue--text heading ma-0">
          Diani Crystal Garden
        </p>
      </v-col>
      <v-col class="col-12 d-flex justify-center text-center blue--text flex-wrap pa-0 justify-center">
        <div class="pa-0 image-div">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_crystal/${current_image_source}`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4 no-gutters">
      <v-col class="col-2 offset-1 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '0.png')}"
          @click="changeImageSource('0.png')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_crystal/0.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '1.png')}"
          @click="changeImageSource('1.png')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_crystal/1.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '2.png')}"
          @click="changeImageSource('2.png')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_crystal/2.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '3.png')}"
          @click="changeImageSource('3.png')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_crystal/3.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-2 mb-4">
        <div
          class="px-4 red rounded mx-2"
          :class="{'lighten-4': (current_image_source !== '4.png')}"
          @click="changeImageSource('4.png')"
        >
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_crystal/4.png`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col class="col-12 col-md-10 offset-md-1 text-center">
        <ul class="text-center">
          <li>✅400M off tamarc</li>
          <li>✅1KM from Technical University of Mombasa</li>
          <li>✅15Min Drive to Ukunda Airstrip</li>
          <li>✅20Min Drive to Diani Beach</li>
          <li>✅Water and Electricity on-site</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'DianiSunrise',

  data () {
    return {
      current_image_source: '0.png'
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
