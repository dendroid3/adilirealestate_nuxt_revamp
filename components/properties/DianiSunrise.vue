<template>
  <div>
    <v-row class="mb-4">
      <v-col class="col-12 text-center blue--text d-flex flex-wrap pa-0 justify-center" style="white-space: nowrap;">
        <p class="d-flex justify-center text--center blue--text heading ma-0">
          Diani Sunrise Estate
        </p>
      </v-col>
      <v-col class="col-12 d-flex justify-center text-center blue--text flex-wrap pa-0 justify-center">
        <div class="pa-0 image-div">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            style="position: relative;"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_sunrise/${current_image_source}`)"
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
            :src="require(`@/assets/diani_sunrise/0.png`)"
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
            :src="require(`@/assets/diani_sunrise/1.png`)"
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
            :src="require(`@/assets/diani_sunrise/2.png`)"
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
            :src="require(`@/assets/diani_sunrise/3.png`)"
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
            :src="require(`@/assets/diani_sunrise/4.png`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col class="col-12 col-md-10 offset-md-1">
        <ul>
          <li>✅Value Added - Fenced and Gated</li>
          <li>✅1KM off Lungalunga Highway</li>
          <li>✅4KM to the Diani Whitesands Beach</li>
          <li>✅7KM to Ukunda Airstrip</li>
          <li>✅Near Diani 5-Star Hotels</li>
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
