<template>
  <div style="padding-bottom: 1rem;">
    <div class="d-flex justify-center animate__animated animate__zoomIn blue--text heading">
      Diani Twins Court
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-md-8 offset-md-2 col-12 pa-4 d-flex flex-wrap pa-0 justify-center" style="border-right: solid 3px white;">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sh1S11EoXkM?si=s22fFcmglNbvM4Ae"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </v-col>

      <v-col class="col-md-8 offset-md-2 col-12 pa-4" style="border-right: solid 3px white;">
        <v-img
          v-if="img_source == '00.png'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/new_project/00.png`)"
        />
        <v-img
          v-if="img_source == '01.PNG'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/new_project/01.PNG`)"
        />
        <v-img
          v-if="img_source == '02.PNG'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/new_project/02.PNG`)"
        />
        <v-img
          v-if="img_source == '03.PNG'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/new_project/03.PNG`)"
        />
        <v-img
          v-if="img_source == '04.PNG'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/new_project/04.PNG`)"
        />
        <v-img
          v-if="img_source == '05.PNG'"
          class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="2/1"
          :src="require(`@/assets/new_project/05.PNG`)"
        />
        <div>
          <span class="d-flex white align-center red rounded justimmfy-center black--text">
            <v-spacer />
            <span class="white--text sub-heading">
              {{ "650,000" }}
            </span>
            <v-spacer />
          </span>
        </div>

        <v-col class="col-12 d-flex justify-center">
          <v-img
            class="rounded red mx-1"
            :class="{
              'lighten-4': img_source !== '00.png'
            }"
            contain
            :width="$vuetify.breakpoint.smAndDown ? 100 : 40"
            :height="$vuetify.breakpoint.smAndDown ? 50 : 20"
            :src="require(`@/assets/new_project/00.png`)"
            @click="changeSource('00.png')"
          />
          <v-img
            class="rounded red mx-1"
            :class="{
              'lighten-4': img_source !== '01.PNG'
            }"
            contain
            :width="$vuetify.breakpoint.smAndDown ? 100 : 40"
            :height="$vuetify.breakpoint.smAndDown ? 50 : 20"
            :src="require(`@/assets/new_project/01.PNG`)"
            @click="changeSource('01.PNG')"
          />
          <v-img
            class="rounded red mx-1"
            :class="{
              'lighten-4': img_source !== '02.PNG'
            }"
            contain
            :width="$vuetify.breakpoint.smAndDown ? 100 : 40"
            :height="$vuetify.breakpoint.smAndDown ? 50 : 20"
            :src="require(`@/assets/new_project/02.PNG`)"
            @click="changeSource('02.PNG')"
          />
          <v-img
            class="rounded red mx-1"
            :class="{
              'lighten-4': img_source !== '03.PNG'
            }"
            contain
            :width="$vuetify.breakpoint.smAndDown ? 100 : 40"
            :height="$vuetify.breakpoint.smAndDown ? 50 : 20"
            :src="require(`@/assets/new_project/03.PNG`)"
            @click="changeSource('03.PNG')"
          />
          <v-img
            class="rounded red mx-1"
            :class="{
              'lighten-4': img_source !== '04.PNG'
            }"
            contain
            :width="$vuetify.breakpoint.smAndDown ? 100 : 40"
            :height="$vuetify.breakpoint.smAndDown ? 50 : 20"
            :src="require(`@/assets/new_project/04.PNG`)"
            @click="changeSource('04.PNG')"
          />
          <v-img
            class="rounded red mx-1"
            :class="{
              'lighten-4': img_source !== '05.PNG'
            }"
            contain
            :width="$vuetify.breakpoint.smAndDown ? 100 : 40"
            :height="$vuetify.breakpoint.smAndDown ? 50 : 20"
            :src="require(`@/assets/new_project/05.PNG`)"
            @click="changeSource('05.PNG')"
          />
        </v-col>
        <!-- <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
        <h5> {{"property.location"}} </h5>
        <h5> {{"property.description"}} </h5>
      </v-col> -->
        <!-- <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
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
        </v-col> -->
        <p class="text-center">
          Diani Twins Court is an exclusive gated estate nestled in a thriving neighborhood just 4km from Diani beach- Africa's leading beach destination. The property boasts of a 1km direct access from Lunga Lunga Highway offering unmatched accessibility. Diani Twins Court is conveniently located close to key Diani amenities such as Diani Market, Diani Shopping Center & Diani Airport immersing you into the magical Diani lifestyle.
        </p>
        <p class="text-center">
          Whether you are looking to build a holiday home or retirement home, Diani Twins Court is the perfect place for you. Buy & Live where others vacation.
        </p>
        <ul>
          <li>✅4KM to the beach</li>
          <li>✅1KM off Lunga-Lunga highway</li>
          <li>✅15mins from Diani Airport</li>
          <li>✅Value Added Gated Community </li>
          <li>✅Serene, Fast Developing Neighborhood</li>
          <li>✅Near key social amenities & 5 star resorts</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'DianiTwinsCourts',
  data () {
    return {
      contact_data: {
        subject: '#Diani Twins Courts'
      },
      book_data: {},
      book_loading: false,
      img_source: '00.png',
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
  head () {
    return {
      title: 'Diani Twins Court'
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
    }
  }
}
</script>
<style scoped>
ul {
  list-style-position: inside;
  list-style-type: none;
 }
</style>
