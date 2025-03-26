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
          Diani Twins Court
        </p>
      </v-col>
      <v-col class="col-12">
        <div class="pa-0 image-div">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn property-image"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/new_project/01.jpg`)"
          >
            <p style="position: absolute; bottom: 0; left: 50%; transform: translate(-50%, -50%); font-size: 1.5rem; color: white; padding: 0.15rem; background: red; border-radius: 10px;">
              650,000 KES
            </p>
          </v-img>
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
            :src="require(`@/assets/new_project/00.jpg`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/new_project/02.jpg`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/new_project/03.jpg`)"
          />
        </div>
      </v-col>
      <v-col class="col-6 mb-4">
        <div class="pa-0">
          <v-img
            class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
            contain
            :aspect-ratio="2/1"
            :src="require(`@/assets/new_project/04.jpg`)"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col class="col-12 col-md-10 offset-md-1 text-center">
        <p>
          Diani Twins Court is an exclusive gated estate nestled in a thriving neighborhood just 4km from Diani beach- Africa's leading beach destination. The property boasts of a 1km direct access from Lunga Lunga Highway offering unmatched accessibility. Diani Twins Court is conveniently located close to key Diani amenities such as Diani Market, Diani Shopping Center & Diani Airport immersing you into the magical Diani lifestyle.
        </p>
        <p>
          Whether you are looking to build a holiday home or retirement home, Diani Twins Court is the perfect place for you. Buy & Live where others vacation.
        </p>
        <ul class="text-center">
          <li>✅4KM to the beach</li>
          <li>✅1KM off Lunga-Lunga highway</li>
          <li>✅15mins from Diani Airport</li>
          <li>✅Value Added Gated Community </li>
          <li>✅Serene, Fast Developing Neighborhood</li>
          <li>✅Near key social amenities & 5 star resorts</li>
        </ul>
        <div class="rounded blue lighten-3 pa-4">
          <p class="text-h4 text-bold">
            {{ "Buy & Live where others vacation. Contact us today to secure your plot" }}
          </p>

          <v-dialog
            v-model="dialog"
            max-width="500px"
            transition="dialog-top-transition"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                class="white--text red"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Get in Touch
              </v-btn>
              <v-btn
                class="white--text green"
                dark
                @click="viewDianiTwinsCourts"
              >
                View
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
    viewDianiTwinsCourts () {
      this.$router.push('/property/diani-twins-courts')
    },

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
  list-style-type: none;
 }
</style>
