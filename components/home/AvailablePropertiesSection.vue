<template>
  <div
    id="availablePropertiesSection"
  >
    <v-row class="mb-4">
      <v-col class="col-12 text-center py-0">
        <div class="bold blue--text d-flex align-end text-center justify-center animate__animated animate__zoomIn heading" style="width:100%;">
          <p class="d-flex justify-center text--center heading">
            Featured Property
          </p>
        </div>
      </v-col>
      <v-col class="col-12 text-center blue--text d-flex flex-wrap justify-center" style="white-space: nowrap;">
        <p class="pa-0 mx-1"> Feature 1 | </p>
        <p class="pa-0 mx-1"> Feature 2 | </p>
        <p class="pa-0 mx-1"> Feature 3 | </p>
        <p class="pa-0 mx-1"> Feature 4 | </p>
        <p class="pa-0 mx-1"> Feature 4 | </p>
        <p class="pa-0 mx-1"> Feature 5</p>
      </v-col>
      <v-col class="col-12 col-md-5 offset-md-1 d-flex align-center">
        <v-img
          id="mainPropertyImage"
          class="mx-1"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/img/land/real_land_0.png`)"
        />
      </v-col>
      <v-col class="col-12 col-md-5">
        <v-row class="px-2">
          <v-col class="col-12 white">
            <p class="d-flex justify-center text--center blue--text heading">
              Project Name
            </p>
            <p>
              [PITCH THE PLOT] The plot is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias asperiores voluptatum quas illo sed modi aspernatur vero in molestias, sit quibusdam assumenda deleniti velit. Consectetur ullam minus in obcaecati consequatur?
            </p>
          </v-col>
          <v-col class="col-6"
            id="colNextToMainPropertyImage"
          >
            <v-img
              class="mx-1"
              contain
              :aspect-ratio="2/1"
              :src="require(`@/assets/img/land/real_land_0.png`)"
            />
          </v-col>
          <v-col class="col-6">
            <v-img
              class="mx-1"
              contain
              :aspect-ratio="2/1"
              :src="require(`@/assets/img/land/real_land_0.png`)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'AvailablePropertiesSection'
}
</script>
