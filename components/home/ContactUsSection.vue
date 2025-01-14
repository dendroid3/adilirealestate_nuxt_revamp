<template>
  <div class="pale-blue">
    <div class="pt-4 d-flex justify-center animate__animated animate__zoomIn blue--text heading">
      Contact Information
    </div>
    <v-row class="no-gutters px-3">
      <h4 class="text-center">
        Get a hold of us on through these channels
      </h4>
    </v-row>
    <v-row>
      <v-row class="no-gutters d-flex justify-center">
        <v-col class="col-1 d-flex justify-center">
          <a href="tel: +254720244744">
            <v-icon small class="mx-2 blue--text">
              mdi-phone
            </v-icon>
          </a>
        </v-col>
        <v-col class="col-11">
          <a href="tel: +254720244744">
            <span>
              0720 244 744
            </span>
          </a>
        </v-col>
      </v-row>
      <v-row class="no-gutters d-flex justify-center">
        <v-col class="col-1 d-flex justify-center">
          <a href="sms: 0720244744">
            <v-icon small class="mx-2 blue--text">
              mdi-message
            </v-icon>
          </a>
        </v-col>
        <v-col class="col-11">
          <a href="sms: 0720244744">
            <span>
              0720 244 744
            </span>
          </a>
        </v-col>
      </v-row>
      <v-row class="no-gutters d-flex justify-center">
        <v-col class="col-1 d-flex justify-center">
          <v-icon small class="mx-2 black--text" @click="goWhatsapp">
            mdi-whatsapp
          </v-icon>
        </v-col>
        <v-col class="col-11">
          <span @click="goWhatsapp">
            0720 244 744
          </span>
        </v-col>
      </v-row>
      <v-row class="no-gutters">
        <v-col class="col-1 d-flex justify-center">
          <a href="mailto: 'Info@adilirealestate.com'">
            <v-icon small class="mx-2 green--text">
              mdi-email
            </v-icon>
          </a>
        </v-col>
        <v-col class="col-11">
          <a href="mailto: 'Info@adilirealestate.com'">
            <span>
              info@adilirealestate.com
            </span>
          </a>
        </v-col>
      </v-row>
      <v-row class="no-gutters d-flex justify-center">
        <v-col class="col-1 d-flex justify-center">
          <a href="https://www.facebook.com/AdiliRealEstate/" target="_blank">
            <v-icon small class="mx-2 blue--text">
              mdi-facebook
            </v-icon>
          </a>
        </v-col>
        <v-col class="col-11">
          <a href="https://www.facebook.com/AdiliRealEstate/" target="_blank">
            <span>
              Adili Real Estate
            </span>
          </a>
        </v-col>
      </v-row>
      <v-row class="no-gutters d-flex justify-center">
        <v-col class="col-1 d-flex justify-center">
          <a href="https://www.twitter.com/AdiliRealEstate/" target="_blank">
            <v-icon small class="mx-2 blue--text">
              mdi-twitter
            </v-icon>
          </a>
        </v-col>
        <v-col class="col-11">
          <a href="https://www.twitter.com/AdiliRealEstate/" target="_blank">
            <span>
              Adili Real Estate
            </span>
          </a>
        </v-col>
        <v-col class="col-6 d-flex justify-center">
          <v-form
            ref="form"
            v-model="valid"
            class=""
            style="width: 90%;"
            :lazy-validation="lazy"
          >
            <div class="pt-4 d-flex justify-center animate__animated animate__zoomIn blue--text heading">
              Quick Message
            </div>
            <v-text-field
              v-model="contact_data.name"
              :rules="rules.requiredRule"
              placeholder="name"
              label="name"
              type="name"
              outlined
              clearable
            />
            <v-text-field
              v-model="contact_data.email"
              :rules="rules.requiredRule"
              placeholder="email"
              label="email"
              type="name"
              outlined
              clearable
            />
            <v-text-field
              v-model="contact_data.phone_number"
              :rules="rules.requiredRule"
              placeholder="phone number"
              label="phone number"
              type="number"
              outlined
              clearable
            />
            <v-text-field
              v-model="contact_data.subject"
              :rules="rules.requiredRule"
              placeholder="subject"
              label="subject"
              type="name"
              outlined
              clearable
            />
            <v-textarea
              v-model="contact_data.message"
              :rules="rules.requiredRule"
              placeholder="message"
              label="message"
              type="name"
              outlined
              clearable
            />
            <p class="text-center">
              {{ "We will get back to you via email or SMS in the shortest time, typicaly within a few hours" }}
            </p>
            <div class="d-flex justify-end">
              <v-btn class="success" :loading="enquire_loading" :disabled="!valid" @click="enquire">
                send
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'ContactUsSection',
  data () {
    return {
      contact_data: {
        subject: '#Diani Crystal Garden'
      },
      enquire_loading: false,
      book_data: {},
      book_loading: false,
      valid: true,
      lazy: false,
      rules: {
        requiredRule: [
          v => !!v || 'This field is required!'
        ]
      }
    }
  },
  methods: {
    ...mapActions(['toogleAlertBox']),
    goWhatsapp () {
      const url = "https://wa.me/+254720244744?text=I'm%20interested%20in%20your%20land%20for%20sale"
      window.open(url, '_blank')
    },
    async enquire () {
      try {
        this.enquire_loading = true
        await
        axios.post(process.env.VUE_APP_API + '/api/enquire', this.contact_data).then((response) => {
          const alertBoxInfo = {
            status: true,
            information: 'Enquiry recorded successfully, we shall get in touch as soon as possible.',
            code: 'success'
          }
          this.toogleAlertBox(alertBoxInfo)
          this.contact_data = {
            subject: '#Diani Crystal Garden'
          }
          this.enquire_loading = false
        })
      } catch (e) {
      }
    },
    async book () {
      try {
        this.book_loading = true
        await
        axios.post('https://api.adilirealestate.com/api/book', this.book_data).then((response) => {
          const alertBoxInfo = {
            status: true,
            information: 'Site visit recorded successfully, we shall get in touch as soon as possible.',
            code: 'success'
          }
          this.toogleAlertBox(alertBoxInfo)
          this.book_data = {}
          this.book_loading = false
        })
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
