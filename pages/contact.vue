<template>
  <div class="pale-blue py-4">
    <div class="d-flex justify-center animate__animated animate__zoomIn heading blue--text">
      Contact Us
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-12 col-md-6">
        <div>
          <div>
            <v-img
              class="img my-1"
              contain
              :aspect-ratio="5/1"
              :src="require(`@/assets/contact_us/contact_us.svg`)"
            />
          </div>
          <div class="pa-4 ">
            <div class="mx-4">
              <p class="text-center">
                We would like to get in touch with you. Get a hold of us through:
              </p>
              <v-row>
                <v-col class="col-6">
                  <h3 class="text-center mb-4 pb-4">
                    Our Contacts
                  </h3>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="call">
                    <v-col class="col-12 mt-4">
                      <div class="mr-1 px-2 white--text">
                        <v-icon large class="white--text">
                          mdi-phone
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        0720 244 744
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goEmail">
                    <v-col class="col-12 mt-4">
                      <div class="mr-1 px-2 white--text">
                        <v-icon large class="white--text">
                          mdi-mail
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        info@adilirealestate.com
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goSMS">
                    <v-col class="col-12 mt-4">
                      <div class="mr-1 px-2 white--text">
                        <v-icon large class="white--text">
                          mdi-message
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        0720 244 744
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="col-6">
                  <h3 class="text-center mb-4 pb-4">
                    Our Socials
                  </h3>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goWhatsApp">
                    <v-col class="col-12 mt-4">
                      <div class="mr-1 px-2 white--text">
                        <v-icon large class="white--text">
                          mdi-whatsapp
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        0720 244 744
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goFacebook">
                    <v-col class="col-12 mt-4">
                      <div class="mr-1 px-2 white--text">
                        <v-icon large class="white--text">
                          mdi-facebook
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        Adili Real Estate
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goTwitter">
                    <v-col class="col-12 mt-4">
                      <div class="mr-1 px-2 white--text">
                        <v-icon large class="white--text">
                          mdi-twitter
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        @AdiliRealEstate
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="col-12 col-md-5 offset-md-1 d-flex justify-center">
        <v-form
          ref="form"
          v-model="valid"
          style="width: 90%;"
          :lazy-validation="lazy"
        >
          <p class="text-center sub-heading">
            Quick Message
          </p>
          <v-text-field
            v-model="contactData.name"
            :rules="rules.requiredRule"
            placeholder="name"
            label="name"
            type="name"
            outlined
            clearable
          />
          <v-text-field
            v-model="contactData.email"
            :rules="rules.requiredRule"
            placeholder="email"
            label="email"
            type="name"
            outlined
            clearable
          />
          <v-text-field
            v-model="contactData.phone_number"
            :rules="rules.requiredRule"
            placeholder="phone number"
            label="phone number"
            type="number"
            outlined
            clearable
          />
          <v-text-field
            v-model="contactData.subject"
            :rules="rules.requiredRule"
            placeholder="subject"
            label="subject"
            type="name"
            outlined
            clearable
          />
          <v-textarea
            v-model="contactData.message"
            :rules="rules.requiredRule"
            placeholder="message"
            label="message"
            type="name"
            outlined
            clearable
          />
          <p class="text-center">
            {{ "We will get back to you via email or SMS in the shortest time" }}
          </p>
          <div class="d-flex justify-end">
            <v-btn class="success" @click="enquire">
              send
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ContactUsSection',
  data () {
    return {
      contactData: {
        subject: '#Diani Twins Court'
      },
      enquireLoading: false,
      book_data: {},
      bookLoading: false,
      valid: true,
      lazy: false,
      rules: {
        requiredRule: [
          v => !!v || 'This field is required!'
        ]
      }
    }
  },
  head () {
    return {
      title: 'Contact Us'
    }
  },
  methods: {
    ...mapActions(['toogleAlertBox']),
    call () {
      const url = 'tel: +254720244744'
      window.open(url, '_blank')
    },

    goEmail () {
      const url = 'mailto:Info@adilirealestate.com'
      window.open(url, '_blank')
    },

    goSMS () {
      const url = 'sms: +254720244744'
      window.open(url, '_blank')
    },

    goWhatsApp () {
      const url = 'https://wa.me/+254720244744?text=I%20am%20interested%20in%20your%20land%20for%20sale'
      window.open(url, '_blank')
    },

    goFacebook () {
      const url = 'https://www.facebook.com/AdiliRealEstate/'
      window.open(url, '_blank')
    },

    goTwitter () {
      const url = 'https://www.twitter.com/AdiliRealEstate/'
      window.open(url, '_blank')
    },

    enquire () {
      try {
        this.enquireLoading = true
        setTimeout(() => {
          this.enquireLoading = false
        }, 1000)
      } catch (e) {
      }
    },

    book () {
      try {
        this.bookLoading = true
        setTimeout(() => {
          this.bookLoading = false
        }, 1000)
      } catch (e) {
      }
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
