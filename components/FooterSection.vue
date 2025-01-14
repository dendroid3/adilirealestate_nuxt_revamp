<template>
  <div
    id="footerSection"
  >
    <v-row class="blue mt-4 mb-4" style="width: 80vw; margin-left: 10vw; line-height: 1px; position: absolute;">
      .
    </v-row>
    <div style="padding-bottom: 5rem;" class="blue footer-wrapper mt-4">
      <v-row class="white mt-4 pt-4">
        <v-col class="d-flex justify-center col-12 col-md-12 col-sm-12 col-xs-12 offset-0 offset-md-0 offset-sm-0 offset-xs-0">
          <div>
            <h3 class="text-center sub-heading">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p class="text-center body-text">
              Submit your email to get updates on our latest properties for sale
            </p>
            <div class="white rounded pa-4 d-flex" style="width: 100%;">
              <v-text-field
                v-model="email"
                small
                placeholder="email"
                class="white"
                label="email"
                type="name"
                outlined
                clearable
              />
              <div class="d-flex justify-center mt-2">
                <v-btn text class="success bold white--text mx-2" :loading="sending_subsription_request" :disabled="!email_is_valid" @click="subscribe">
                  Subscribe
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="blue pa-4 white--text">
        <v-col class="col-12 col-md-3 d-flex justify-center footer-block">
          <div>
            <h3 class="text-center">
              About Us
            </h3>
            <v-row class="mt-4 mb-4 pa-4">
              <p>
                Adili Real Estate is a private limited company registered by the government of Kenya. We bring to you a variety of affordable and carefully chosen pieces of land in
                emerging markets with high potential for growth. This gives your acquired land guaranteed high appreciation rate.
                We are dedicated to walk with you. We are a team of highly qualified professionals with years of experience in the real estate sector.
              </p>
              <v-btn small @click="go('about')">
                Learn more
              </v-btn>
            </v-row>
          </div>
        </v-col>
        <v-col class="col-12 col-md-3 d-flex justify-center footer-block">
          <div>
            <h3 class="text-center">
              Our Properties
            </h3>
            <div class="d-flex mt-4 pt-4" style="height: 100%;">
              <div>
                <v-row class="mt-2 no-gutters mb-2">
                  <v-col class="col-12 pb-0 ma-0 pa-0 d-flex justify-center">
                    <v-img
                      class="img pointer my-0 rounded darken-1"
                      :src="require(`@/assets/img/land/real_land_0.png`)"
                    >
                      <span style="font-weight: 800;">
                        Diani Crystal Gardens
                      </span>
                    </v-img>
                  </v-col>
                  <v-col class="col-12 pointer text-center mt-1">
                    Diani Crystal Gardens
                  </v-col>
                </v-row>
                <v-row class="mt-4 pt-4 no-gutters mb-2">
                  <v-col class="col-12 pb-0 mt-4 pt-4 d-flex justify-center">
                    <v-img
                      class="img pointer my-0 rounded darken-1"
                      :src="require(`@/assets/img/land/real_land_0.png`)"
                    >
                      <span style="font-weight: 800;">
                        Diani Sunrise Estate
                      </span>
                    </v-img>
                  </v-col>
                  <v-col class="col-12 pointer text-center mt-1">
                    Diani Sunrise Estate
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="col-12 col-md-3 d-flex justify-center footer-block">
          <div>
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
          </div>
        </v-col>
        <v-col class="col-12 col-md-3 d-flex justify-center footer-block">
          <div>
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
          </div>
        </v-col>
      </v-row>
      <v-row class="white mt-4 mb-4" style="width: 25vw; margin-left: 37.5vw; line-height: 1px; position: absolute;">
        .
      </v-row>

      <v-row class="pt-4">
        <v-col class="col-12 d-fl;;ex justify-center">
          <div class="d-flex justify-center">
            <span class="">
              Made with
              <v-icon small class="red--text">
                mdi-heart
              </v-icon>
              by
              <a class="white px-1 rounded bold" style="font-size: 0.8rem;" href="http://dehub.dkut.ac.ke">{{ `WAZO TANK` }}</a>
            </span>
          </div>
          <div class="d-flex align-center justify-center">
            <span class="mx-4 d-flex align-center">
              <v-icon small>
                mdi-copyright
              </v-icon>
              {{ new Date().getFullYear() }}
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterSection',

  data: () => {
    return {
      email: null,
      sending_subsription_request: false
    }
  },

  computed: {
    email_is_valid () {
      if (!this.email) {
        return false
      }
      if (
        (this.email.indexOf('@') > 1) &&
        (this.email.lastIndexOf('.') > this.email.indexOf('@')) &&
        (this.email.lastIndexOf('.') < (this.email.length - 1))
      ) {
        return true
      }
      return false
    }
  },

  methods: {
    call () {
      const url = 'tel: +254720244744'
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

    goEmail () {
      const url = 'mailto:Info@adilirealestate.com'
      window.open(url, '_blank')
    },

    goSMS () {
      const url = 'sms: +254720244744'
      window.open(url, '_blank')
    },

    subscribe () {
      console.log('Hello')
    }

  }
}
</script>
<style lang="css" scoped>
  .link{
    text-decoration: underline;
    margin-left:0.3rem;
    margin-right:0.3rem;
  }

  .footer-block{
    position: relative;
  }

  .footer-block:after{
    content: "";
    position: absolute;
    background-color: white;
    height: 80%;
    width: 1px;
    bottom: 0;
    right: 0;
  }

  .img{
    width: 5rem;
    height: 5rem;
    padding: 2rem;
    margin: 2rem;
  }

</style>
