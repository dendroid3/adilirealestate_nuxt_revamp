<template>
  <div class="pale-blue">
    <div class="d-flex justify-center mt-4 align-center blue--text heading">
      Past Projects
    </div>
    <v-row>
      <v-col class="col-12 col-md-10 offset-md-1">
        <v-row class="px-2 d-flex justify-center">
          <v-col class="col-12 col-md-4">
            <diani-sunrise-two />
          </v-col>
          <v-col class="col-12 col-md-4">
            <diani-sunrise />
          </v-col>
          <v-col class="col-12 col-md-4">
            <diani-crystal />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import DianiCrystal from '../properties/DianiCrystal.vue'
import DianiSunrise from '../properties/DianiSunrise.vue'
import DianiSunriseTwo from '../properties/DianiSunriseTwo.vue'
export default {
  name: 'PropertiesCard',
  components: {
    DianiCrystal,
    DianiSunrise,
    DianiSunriseTwo
  },
  data () {
    return {
      counter: 1
    }
  },
  methods: {
    viewAll () {
      this.$router.push('/properties')
    }
  }
}
</script>
