<template>
  <div class="mb-2">
    <div class="d-flex align-center justify-center animate__animated animate__zoomIn heading blue--text">
      Blogs and Tips
    </div>
    <v-row class="pa-4 d-flex">
      <v-col class="col-1 justify-end pa-0 d-flex align-center">
        <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToLeft">
          mdi-arrow-left
        </v-icon>
      </v-col>
      <v-col class="col-10">
        <v-row>
          <v-sheet
            id="sheet"
            class="d-flex"
            style="overflow-x: scroll;"
          >
            <v-col
              v-for="(blog, i) in blogs"
              :key="i"
              class="col-12 col-md-4"
            >
              <blog-card :blog="blog" />
            </v-col>
          </v-sheet>
        </v-row>
      </v-col>
      <v-col class="col-1 d-flex align-center pa-0">
        <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToRight">
          mdi-arrow-right
        </v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BlogCard from '../BlogCard.vue'
export default {
  name: 'BlogsSection',

  components: {
    BlogCard
  },

  data: () => {
    return {
      blogs: [
        {
          title: 'Dongo-Kundu Byspass:',
          subtitle: 'The Gate to the South Coast',
          image: 'bypass_1.jpg',
          content: 'Also known as the Mombasa Southern Bypass Highway, the 17.5KM, four-lane stretch of road is a brainchild of the past government which planned it in 2004. The plans to initiate the construction began in 2014 with a $110 B loan from Japan International Cooperation Agency (JICA). Its actual construction began in 2018 by the China Civil Engineering Construction Corporation and is set to be complete in 2024.',
          url: 'process-of-buying-land'
        },
        {
          title: 'Finance:',
          subtitle: 'TLand as a Hedge against Inflation',
          image: 'infation.jpg',
          content: 'People naturally pay more interest to alarming news; this can be explained from an evolutionary stand point where the need to be keen on assumed imminent threats was vital to survival. With this knowledge one may argue that the current panic about inflation is nothing more than hot air exacerbated by the phenomenon elaborated earlier. However, numbers do not lie, the Kenya National Bureau of statistics announced an acceleration in the country’s annual inflation rate to 7.9% in the month of June, 2022 which signified a 0.8% increase from just a month earlier',
          url: 'land-as-a-hedge-against-inflation'
        },
        {
          title: 'Land Location:',
          subtitle: 'Why Land Location Matters',
          image: 'location.jpg',
          content: 'Land is homogeneous across large tracks; equally sized parcels of land should therefore, ideally, be worth the same, except they are not. Different plots of land may differ in their value despite being of the same size, fertility and climate. This difference is informed by several factors such as its size, proximity to amenities, underground natural resources but chiefly by its location. This is the reason why an acre in the leafy suburbs of Nairobi is several folds more expensive that an acre in, say, Mandera. Clichés get to be clichés since they have been deemed worth repeating having proven their truthfulness; thus, ‘location, location, location’ is as true as day. This drives our discussion topic today:',
          url: 'why-land-location-matters'
        },
        {
          title: ' Land Fraud:',
          subtitle: 'Red Flags when Buying Land',
          image: 'redflag.jpeg',
          content: 'Buying land is currently all the hype -  many people are in the pursuit to purchase land. This trend is informed by the many benefits that owning land has, some of these benefits are discussed in our other blogs here. Scammers and fraudsters have also taken note of this trend are keen to reap where they did not sow. This has seen land-buying related scamming schemes rise, with some being of unimaginable scales such like the one run by Gakuyo Real Estate worth over',
          url: 'red-flags-when-buying-land'
        },
        {
          title: 'Land Processes:',
          subtitle: 'The Process of Buying Land',
          image: 'genuine.jpeg',
          content: 'A few malicious land-selling enterprises have painted the buying process to be confusing. However, the confusion is a deliberate tactic, “if you cannot convince them, confuse them.” The process of buying land need not be rocket science, and if it seems so, then it should be a red flag, other red flags here. Here are the ten steps to get you to the `land owner` status.',
          url: 'process-of-buying-land'
        }
      ]
    }
  },

  methods: {
    viewAll () {
      this.$router.push('/blogs')
    },

    scrollTheSheetToRight () {
      const sheet = document.getElementById('sheet')
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

    scrollTheSheetToLeft () {
      const sheet = document.getElementById('sheet')
      for (let index = 0; index < 250; index++) {
        setTimeout(() => {
          if (index / 2 > 0.5) {
            sheet.scrollLeft -= 2
          } else {
            sheet.scrollLeft -= 1
          }
        }, index * 2)
      }
    }
  }
}
</script>
