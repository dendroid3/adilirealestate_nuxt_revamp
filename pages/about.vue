<template>
  <div class="about col-12 px-2" style="padding-bottom: 5rem;">
    <v-row class="no-gutters">
      <v-col class="col-md-10 col-12 offset-md-2">
        <h2 class="blue--text heading">
          BACKGROUND
        </h2>
      </v-col>

      <v-col class="col-md-8 col-12">
        <v-img
          class="img rounded lighten-4 ma-4"
          contain
          :src="require(`../assets/img/beach.jpeg`)"
        />
      </v-col>
      <v-col class="col-md-4 col-12 d-flex sub-heading align-center">
        <p>
          Adili Real Estate is a private limited company registered by the government of Kenya. We bring to you a variety of affordable and carefully chosen pieces of land in
          emerging markets with high potential for growth. This gives your acquired land guaranteed high appreciation rate.
          We are dedicated to walk with you. We are a team of highly qualified professionals with years of experience in the real estate sector.
        </p>
      </v-col>
    </v-row>
    <v-row class="no-gutters">
      <v-col class="col-md-8 col-12 offset-md-2">
        <h2 class="blue--text heading">
          MISSION
        </h2>
        <p>
          Our mission is to make land ownership a worthy investment for all by providing affordable properties that offer value for money.
        </p>
        <h2 class="blue--text heading">
          VISION
        </h2>
        <p class="body-text">
          To be the go-to channel for prime land scouting and acquisition.
        </p>
        <h2 class="blue--text heading">
          CORE VALUES
        </h2>
        <div class="px-2">
          <h3 class="red--text d-flex align-center sub-heading">
            <v-icon class="red rounded bold white--text mr-1" style="font-weight: 800;">
              mdi-check
            </v-icon>
            Accountability
          </h3>
          <p class="px-2">
            We own up to our respobilities to our customers with zeal and clarity. We do not cut corners and strive keep our customers in the loop throughout our interaction with our customers.
          </p>
          <h3 class="red--text d-flex align-center sub-heading">
            <v-icon class="red rounded bold white--text mr-1" style="font-weight: 800;">
              mdi-check
            </v-icon>
            Dedication
          </h3>
          <p class="px-2">
            The process of acquiring land might be compliated and as such calls for dedication all through the whole process. It calls for utmost willpower and dedication to
            navigate the hurdles.
            We are dedicated to deliver the best value and experience to our customers.
          </p>
          <h3 class="red--text d-flex align-center sub-heading">
            <v-icon class="red rounded bold white--text mr-1" style="font-weight: 800;">
              mdi-check
            </v-icon>
            Integrity
          </h3>
          <p class="px-2">
            Being a registered company, we operate within the confines of the Kenyan law as outlined by the Companies Act.
            We ensure that that all our activities are not only legal but also moral, adhering to the African ethical values that call for integrity.
            Never will we ever compromise on our innate ethics to have an edge over the competition or to do malice to our customers.
          </p>

          <h3 class="red--text d-flex align-center sub-heading">
            <v-icon class="red rounded bold white--text mr-1" style="font-weight: 800;">
              mdi-check
            </v-icon>
            Loyalty
          </h3>
          <p class="px-2">
            We cannot be in business without you, our customers, you are our lifeline, we therefore strive to be loyal to you and your vision and aspirations.
            We understand that if you win, we all win and as such we put our customers above all other factors.
          </p>

          <h3 class="red--text d-flex align-center sub-heading">
            <v-icon class="red rounded bold white--text mr-1" style="font-weight: 800;">
              mdi-check
            </v-icon>
            Innovation/Innovation
          </h3>
          <p class="px-2">
            People have been acquiring land for the majority of recorded human history, however, much has changed in the acquision process since the days of conquering lands.
            We strive to keep up with this change and constantly coming up with new innovative ways of identifying, acquiring and delivering promising lands.
            We are also working hard to invent new payment, visitation and booking models to ensure that we stay ahead of the curve in the industry.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  name: 'About',

  head () {
    return {
      title: 'About Us'
    }
  }
}
</script>
