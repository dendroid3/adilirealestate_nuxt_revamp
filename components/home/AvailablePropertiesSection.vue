<template>
  <div
    id="availablePropertiesSection"
  >
    <v-row class="mb-4">
      <v-col class="col-12 text-center py-0">
        <div class="bold blue--text d-flex align-end text-center pa-0 justify-center animate__animated animate__zoomIn heading" style="width:100%;">
          <p class="d-flex justify-center text--center heading ma-0">
            Featured Property
          </p>
        </div>
      </v-col>
      <v-col class="col-12 text-center blue--text d-flex flex-wrap pa-0 justify-center" style="white-space: nowrap;">
        <p class="d-flex justify-center text--center blue--text heading ma-0">
          Project Name
        </p>
      </v-col>
      <v-col class="col-12">
        <div style=" max-height: 70vh; width: 100vw; " class="pa-0">
          <v-img
            style="min-width: 100vw; max-height: 70vh; position: relative;"
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/new_project/01.png`)"
          >
            <div class="pa-2 d-flex justify-center" style="position: absolute; bottom: 0; right: 3rem; left: 3rem;">
              <div class="green rounded pa-1">
                <div class="">
                  Our show house is under construction in Pazurina’s maiden project, the Pazurina golf resort! With plots 99% sold out, this project is a true definition of Pazurina’s dedication to delivering real estate investment dreams.
                  Our show house is under construction in Pazurina’s maiden project, the Pazurina golf resort! With plots 99% sold out, this project is a true definition of Pazurina’s dedication to delivering real estate investment dreams.
                </div>
              </div>
            </div>
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'AvailablePropertiesSection'
}
</script>
