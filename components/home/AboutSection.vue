<template>
  <div
    id="aboutSection"
  >
    <v-row class="text--center">
      <v-col class="col-12 col-md-6 offset-md-3">
        <div class="bold blue--text d-flex text-center justify-center animate__animated animate__zoomIn heading" style="width:100%;">
          <p class="d-flex justify-center text--center heading">
            Why choose Adili Real Estate?
          </p>
        </div>
        <div class="d-flex justify-center" style="width:100%;">
          <p class="text-center p sub-heading">
            We bring to you a varierty of affordable and carefully chosen plots for sale in Diani, South Coast with ready title deeds.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',

  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
    },
    buyNow () {
      const url = 'https://wa.me/+254720244744?text=I%20want%20to%20buy%20this%20land%20now!'
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>

</style>
