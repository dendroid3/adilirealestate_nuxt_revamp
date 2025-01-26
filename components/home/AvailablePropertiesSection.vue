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
        <div class="pa-0 image-div">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/new_project/01.png`)"
          />
        </div>
      </v-col>
      <v-col class="col-12 col-md-10 offset-md-1 text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius quis incidunt repudiandae magnam adipisci voluptatem expedita quo nemo provident, molestias placeat ipsum vel magni doloribus repellat? Molestiae, quasi. Esse, error autem? Nam, facilis. Cum similique rem earum quam impedit, officia labore sint non in dolor nostrum. Quidem, rerum dolores.
        </p>
        <ul class="text-center">
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        <div class="rounded blue lighten-3 pa-4">
          <p class="text-h4 text-bold">
            Make this paradise your home. Contact us today to secure your plot!
          </p>

          <v-dialog
            v-model="dialog"
            max-width="500px"
            transition="dialog-top-transition"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                class="block white--text red"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Get in Touch
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">
                Contact Us Through:
                <v-spacer />
                <v-icon
                  class="pointer red rounded-circle pa-1 white--text"
                  @click="dialog = false"
                >
                  mdi-close
                </v-icon>
              </v-card-title>
              <v-card-actions>
                <v-btn
                  block
                  class="white--text"
                  color="green darken-1"
                  @click="goWhatsApp"
                >
                  <v-icon>
                    mdi-whatsapp
                  </v-icon>
                  WhatsApp
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn
                  block
                  class="white--text"
                  color="green darken-1"
                  @click="call"
                >
                  <v-icon>
                    mdi-phone
                  </v-icon>
                  Call
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn
                  block
                  class="white--text"
                  color="green darken-1"
                  @click="goSMS"
                >
                  <v-icon>
                    mdi-message
                  </v-icon>
                  SMS
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn
                  block
                  class="white--text"
                  color="green darken-1"
                  @click="goEmail"
                >
                  <v-icon>
                    mdi-email
                  </v-icon>
                  Email
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AvailablePropertiesSection',

  data () {
    return {
      dialog: false
    }
  },

  methods: {
    call () {
      const url = 'tel: +254720244744'
      window.open(url, '_blank')
    },

    goWhatsApp () {
      const url = 'https://wa.me/+254720244744?text=I%20would%20like%20to%20get%20more%20information%20about%20the%20land%20you%20have%20listed.%20Could%20you%20please%20provide%20details%20on%20the%20location,%20size,%20price,%20and%20any%20other%20relevant%20information?%20Thank%20you.'

      window.open(url, '_blank')
    },

    goEmail () {
      const url = 'mailto:Info@adilirealestate.com'
      window.open(url, '_blank')
    },

    goSMS () {
      const url = 'sms: +254720244744'
      window.open(url, '_blank')
    }

  }
}
</script>

<style scoped>
 .image-div {
    max-height: 70vh;
    width: 100vw;
 }

 .property-image {
    min-width: 100vw;
    max-height: 70vh;
    position: relative;
 }

 ul {
  list-style-position: inside;
 }
</style>
