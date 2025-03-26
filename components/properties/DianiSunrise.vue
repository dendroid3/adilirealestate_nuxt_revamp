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
            :src="require(`@/assets/diani_sunrise/1.png`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4 no-gutters">
      <v-col class="col-6 mb-4">
        <div class="px-4">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_sunrise/0.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="px-4">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_sunrise/2.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="px-4">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/diani_sunrise/3.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="px-4">
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
      <v-col class="col-12 col-md-10 offset-md-1 text-center">
        <ul class="text-center">
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
  name: 'DianiSunrise'
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
