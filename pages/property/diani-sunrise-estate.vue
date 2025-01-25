<template>
  <div style="padding-bottom: 1rem;">
    <div class="d-flex justify-center animate__animated animate__zoomIn blue--text heading">
      Diani Sunrise Estate
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-8  pa-4" style="border-right: solid 3px white;">
        <v-img
          v-if="img_source == 'sunrise_0.png'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/diani_sunrise/0.png`)"
        />
        <v-img
          v-if="img_source == 'sunrise_1.png'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/diani_sunrise/1.png`)"
        />
        <v-img
          v-if="img_source == 'sunrise_2.png'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/diani_sunrise/2.png`)"
        />
        <v-img
          v-if="img_source == 'sunrise_3.png'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/diani_sunrise/3.png`)"
        />
        <v-img
          v-if="img_source == '4.png'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/diani_sunrise/4.png`)"
        />
        <div>
          <span class="d-flex white align-center red rounded justimmfy-center black--text">
            <v-spacer />
            <span class="white--text sub-heading">
              {{ "549,000" }}
            </span>
            <v-spacer />
          </span>
        </div>

        <v-col class="col-12 d-flex justify-center ">
          <v-img
            class="rounded  mx-1"
            :class="{
              'red': img_source == '0.png'
            }"
            contain
            :width="40"
            :height="20"
            :src="require(`@/assets/diani_sunrise/0.png`)"
            @click="changeSource('0.png')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '1.png'
            }"
            contain
            :width="40"
            :height="20"
            :src="require(`@/assets/diani_sunrise/1.png`)"
            @click="changeSource('1.png')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '2.png'
            }"
            contain
            :width="40"
            :height="20"
            :src="require(`@/assets/diani_sunrise/2.png`)"
            @click="changeSource('2.png')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '3.png'
            }"
            contain
            :width="40"
            :height="20"
            :src="require(`@/assets/diani_sunrise/3.png`)"
            @click="changeSource('3.png')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '4.png'
            }"
            contain
            :width="40"
            :height="20"
            :src="require(`@/assets/diani_sunrise/4.png`)"
            @click="changeSource('4.png')"
          />
        </v-col>
        <!-- <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
        <h5> {{"property.location"}} </h5>
        <h5> {{"property.description"}} </h5>
      </v-col> -->
        <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
          <p class="d-flex align-center mr-2">
            <v-icon small class="red--text">
              mdi-pin
            </v-icon>
            Diani
          </p>
          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "Value Added Plots - Fenced and Gated." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "1KM off Lungalunga Highway." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "4KM to the Diani Whitesands Beach." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "7KM to Ukunda Airstrip." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "Near Diani 5-star Hotels." }}
          </h5>
        </v-col>
      </v-col>
      <v-col class="col-4 d-flex justify-center grey py-2 rounded lighten-4">
        <v-form
          v-if="enquire"
          ref="form"
          v-model="valid"
          class=""
          style="width: 90%;"
          :lazy-validation="lazy"
        >
          <div class="d-flex">
            <v-spacer />
            <p class="text-center sub-heading">
              Quick Message
            </p>
            <v-spacer />

            <!-- <v-btn small class="success" @click="enquireFunction(false)"> Book </v-btn> -->
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
            {{ "We will get back to you via email or SMS in the shortest time" }}
          </p>
          <div class="d-flex justify-end">
            <v-btn class="success" :disabled="!enquiryValid" :loading="enquire_loading" @click="enquireMethod">
              send
            </v-btn>
          </div>
        </v-form>

        <v-form
          v-if="!enquire"
          ref="form"
          v-model="valid"
          class=""
          style="width: 90%;"
          :lazy-validation="lazy"
        >
          <div class="d-flex">
            <v-spacer />
            <p class="text--center sub-heading">
              Book Site Visit
            </p>
            <v-spacer />
            <v-btn small class="success" @click="enquireFunction(true)">
              Enquire
            </v-btn>
          </div>
          <v-text-field
            v-model="book_data.name"
            :rules="bookRules"
            placeholder="name"
            label="name"
            type="name"
            outlined
            clearable
          />
          <v-text-field
            v-model="book_data.email"
            :rules="bookRules"
            placeholder="email"
            label="email"
            type="name"
            outlined
            clearable
          />
          <v-text-field
            v-model="book_data.phone_number"
            :rules="bookRules"
            placeholder="phone number"
            label="phone number"
            type="number"
            outlined
            clearable
          />
          <v-textarea
            v-model="book_data.message"
            :rules="bookRules"
            placeholder="additional comment"
            label="additional commment"
            type="name"
            outlined
            clearable
          />
          <p class="text-center">
            {{ "Site visits are prearranged and available any day of the weekend. Fill this form to initiate the process. We will get back to you" }}
          </p>
          <div class="d-flex justify-end">
            <v-btn class="success mb-4" :disabled="!bookValid" :loading="book_loading" @click="book">
              book
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
  name: 'DianiSunriseEstate',
  data () {
    return {
      contact_data: {
        subject: '#Diani Sunrise Garden'
      },
      book_data: {},
      book_loading: false,
      img_source: '0.png',
      counter: [1, 2, 3],
      enquire: true,
      enquire_loading: false,
      rules: {
        requiredRule: [
          v => !!v || 'This field is required!'
        ]
      },
      valid: true,
      lazy: false
    }
  },
  computed: {
    bookValid () {
      if (
        !this.book_data.name ||
        !this.book_data.email ||
        !this.book_data.phone_number ||
        !this.book_data.dates ||
        !this.book_data.message
      ) {
        return false
      } else {
        return true
      }
    },
    enquiryValid () {
      if (
        !this.contact_data.name ||
        !this.contact_data.email ||
        !this.contact_data.phone_number ||
        !this.contact_data.subject ||
        !this.contact_data.message
      ) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    ...mapActions(['toogleAlertBox']),
    changeSource (code) {
      this.img_source = code
    },
    enquireMethod () {
      try {
        // this.enquire_loading = true
        // const response = await
        // axios.post(process.env.VUE_APP_API + '/api/enquire', this.contact_data).then((response) => {
        //   console.log(response)
        //   const alert_box_info = {
        //     status: true,
        //     information: 'Enquiry recorded successfully, we shall get in touch as soon as possible.',
        //     code: 'success'
        //   }
        //   this.toogleAlertBox(alert_box_info)
        //   this.contact_data = {
        //     subject: '#Diani Crystal Garden'
        //   }
        //   this.enquire_loading = false
        // })
        console.log('response')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
