<template>
  <div
    id="howToBuySection"
  >
    <p class="blue--text text-center heading">
      How To Buy
    </p>

    <!-- Desktop Version -->
    <v-row
    v-if="!isMobile"
    class="pa-4 d-flex">
      <v-col class="col-1 justify-end pa-0 d-flex align-center d-none d-md-flex">
        <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToLeftDesktop">
          mdi-arrow-left
        </v-icon>
      </v-col>
      <v-col class="col-10">
        <v-row class="d-flex">
          <v-sheet id="sheet_2" class="d-flex pale-blue" style="overflow-x: scroll;">
            <v-col class="how_to_card">
              <div class="d-flex justify-center main my-1">
                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        1. Site Visit
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/site_visit.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Contact us to book a free site visit to visit our properties. We have both mega site visits and daily site visits individually planned at your convenience.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col class="how_to_card">
              <div class="d-flex justify-center main my-1">
                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        2. Plot Selection
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/selection.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Select your preferred plot from the amended map showing the plots layout.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col class="how_to_card">
              <div class="d-flex justify-center main my-1">
                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        3. Due Diligence
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/due_diligence.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      We will provide a copy of title deed for the selected plot for your due diligence.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col class="how_to_card">
              <div class="d-flex justify-center main my-1">
                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        4. Payment
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/payment.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Upon satisfaction, make a partial or full payment either through MPESA or Bank deposit/transfer, depending on the agreed upon payment plan.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col class="how_to_card">
              <div class="d-flex justify-center main my-1">
                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        5. Legal Documentation
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/legal_documentation.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Upon making the initial minimum deposit, sign the sale agreement, transfer form and other documentation to enable us to start your title transfer process
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col class="how_to_card">
              <div class="d-flex justify-center main my-1">
                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        6. Complete Payment
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/complete_payment.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Complete payment according to the chosen payment plan.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col id="longest_col">
              <div class="d-flex justify-center main my-1">
                <div class="section elevation-3 grey lighten-4 rounded text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        7. Collect Title Deed
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`@/assets/how_to_buy/collect_title.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      We will let you know once the title deed transfer process is complete and your title deed is ready for collection. You may collect from our office in person, authorize someone to collect on your behalf. Alternatively, we can send it via your preferred and trusted courier service.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-sheet>
        </v-row>
      </v-col>
      <v-col class="col-1 d-flex align-center pa-0">
        <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToRightDesktop">
          mdi-arrow-right
        </v-icon>
      </v-col>
    </v-row>

    <!-- Mobile Version -->
    <v-row
      v-else
      class="pa-1 d-flex"
      style="position: relative;"
    >
      <span
        class="pointer"
        style="
          position: absolute;
          top: 50%;
          left: 5%;
          z-index: 99;
      "
        @click="scrollTheSheetToLeftMobile"
      >
        <v-icon
          class="rounded"
          :class="{
            'blue': counter > 0,
            'grey': counter == 0
          }"
        >
          mdi-arrow-left
        </v-icon>
      </span>

      <v-col class="col-12">
        <v-row class="d-flex">
          <v-sheet id="sheet_2" class="d-flex pale-blue" style="overflow-x: scroll;">
            <v-col v-if="counter == 0" id="how_to_card_0">
              <div class="main my-1">
                <div class="section-mobile elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        1. Site Visit
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/site_visit.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Contact us to book a free site visit to visit our properties. We have both mega site visits and daily site visits individually planned at your convenience.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col v-if="counter == 1" id="how_to_card_1">
              <div class="main my-1">
                <div class="section-mobile  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        2. Plot Selection
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/selection.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Select your preferred plot from the amended map showing the plots layout.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col v-if="counter == 2" id="how_to_card_2">
              <div class="main my-1">
                <div class="section-mobile  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        3. Due Diligence
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/due_diligence.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      We will provide a copy of title deed for the selected plot for your due diligence.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col v-if="counter == 3" id="how_to_card_3">
              <div class="main my-1">
                <div class="section-mobile  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        4. Payment
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/payment.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Upon satisfaction, make a partial or full payment either through MPESA or Bank deposit/transfer, depending on the agreed upon payment plan.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col v-if="counter == 4" id="how_to_card_4">
              <div class="main my-1">
                <div class="section-mobile  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        5. Legal Documentation
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/legal_documentation.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Upon making the initial minimum deposit, sign the sale agreement, transfer form and other documentation to enable us to start your title transfer process
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col v-if="counter == 5" id="how_to_card_5">
              <div class="main my-1">
                <div class="section-mobile  elevation-3 rounded grey lighten-4 text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        6. Complete Payment
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/complete_payment.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      Complete payment according to the chosen payment plan.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col v-if="counter == 6" id="longest_col_6">
              <div class="main my-1">
                <div class="section-mobile elevation-3 grey lighten-4 rounded text-center">
                  <v-row>
                    <v-col cols="12" class="blue--text text-">
                      <p class="sub-heading">
                        7. Collect Title Deed
                      </p>
                    </v-col>
                    <v-col class="col-1" />
                    <v-col
                      class="grey lighten-3 rounded col-10"
                    >
                      <v-img
                        class="mx-1"
                        contain
                        :aspect-ratio="2/1"
                        :src="require(`../../assets/how_to_buy/collect_title.svg`)"
                      />
                    </v-col>
                    <v-col
                      class="d-flex pa-4 align-center"
                      cols="12"
                    >
                      We will let you know once the title deed transfer process is complete and your title deed is ready for collection. You may collect from our office in person, authorize someone to collect on your behalf. Alternatively, we can send it via your preferred and trusted courier service.
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-sheet>
        </v-row>
      </v-col>
      <span
        class="pointer"
        style="
                  position: absolute;
                  top: 50%;
                  right: 5%;
              "
        @click="scrollTheSheetToRightMobile"
      >
        <v-icon
          class="rounded"
          :class="{
            'blue': counter < 6,
            'grey': counter == 6
          }"
        >
          mdi-arrow-right
        </v-icon>
      </span>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'HowToBuySection',

  data () {
    return {
      counter: 0
    }
  },

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xsOnly
    }
  },

  mounted () {
    let maxHeight = 0
    const cards = document.querySelectorAll('.section')
    cards.forEach((card) => {
      if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight
      }
    })

    cards.forEach((card) => {
      card.style.height = maxHeight + 'px'
    })
    if (this.$router.history.current.name === 'howToBuy') {
      setInterval(() => {
        this.scrollTheSheetToRightDesktop()
      }, 2500)
    }
  },

  methods: {
    scrollTheSheetToRightDesktop () {
      const sheet = document.getElementById('sheet_2')
      for (let index = 0; index < 250; index++) {
        setTimeout(() => {
          if (index / 2 > 0.5) {
            sheet.scrollLeft += 2
          } else {
            sheet.scrollLeft += 1
          }
        }, index * 3)
      }
    },

    scrollTheSheetToLeftDesktop () {
      const sheet = document.getElementById('sheet_2')
      for (let index = 0; index < 250; index++) {
        setTimeout(() => {
          if (index / 2 > 0.5) {
            sheet.scrollLeft -= 2
          } else {
            sheet.scrollLeft -= 1
          }
        }, index * 2)
      }
    },

    scrollTheSheetToRightMobile () {
      if (this.counter !== 6) {
        this.counter++
      }
    },

    scrollTheSheetToLeftMobile () {
      if (this.counter !== 0) {
        this.counter--
      }
    }
  }
}
</script>
<style scoped>
  .section{
      width: calc((100vw / 3.5) - 1rem);
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      border: solid 1px grey;
      margin-bottom: 1rem;
  }

  .section-mobile{
    border: solid 1px grey;
    margin-bottom: 1rem;
}
</style>
