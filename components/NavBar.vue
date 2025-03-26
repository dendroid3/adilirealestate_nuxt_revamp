<template>
  <div
    id="navBar"
    class="app-bar-wrapper"
  >
    <div class="row no-gutters">
      <div class="col-12 blue justify-end d-flex px-4 py-1">
        <div class="d-flex justify-end mb-1 rounded">
          <a :href="`tel: +254720244744`" style="text-decoration: none;">
            <div class="mr-1 px-2  rounded blue black--text lighten-4">
              <v-icon small class="black--text">
                mdi-phone
              </v-icon> 0720244744
            </div>
          </a>
          <div class="mr-1 px-2  rounded blue black--text lighten-4">
            <v-icon small class="black--text">
              mdi-mail
            </v-icon> info@adilirealestate.com
          </div>
        </div>
      </div>
    </div>

    <v-app-bar
      id="appBar"
      flat
      color="white"
    >
      <div>
        <v-img
          class="white pa-2 my-h2 rounded pointer"
          :src="require(`@/assets/img/logo.png`)"
          max-height="60"
          max-width="150"
          contain
          @click="goToPage()"
        />
      </div>
      <v-spacer />
      <section
        v-if="!isMobile"
        class="d-flex align-end"
      >
        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'Home',
            'red lighten-2': pageName == 'Home'
          }"
          @click="goToPage()"
        >
          Home
        </v-btn>

        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'About',
            'red lighten-2': pageName == 'About'
          }"
          @click="goToPage('about')"
        >
          About Us
        </v-btn>
        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'Properties',
            'red lighten-2': pageName == 'Properties'
          }"
          @click="goToPage('properties')"
        >
          Properties
        </v-btn>
        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'howToBuy',
            'red lighten-2': pageName == 'howToBuy'
          }"
          @click="goToPage('how-to-buy')"
        >
          How To Buy
        </v-btn>
        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'faqs',
            'red lighten-2': pageName == 'faqs'
          }"
          @click="goToPage('faqs')"
        >
          FAQ
        </v-btn>
        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'blogs',
            'red lighten-2': pageName == 'blogs'
          }"
          @click="goToPage('blogs')"
        >
          Blogs
        </v-btn>
        <v-btn
          text
          small
          class="bold white--text mx-2"
          :class="{
            'blue lighten-2': pageName != 'contact',
            'red lighten-2': pageName == 'contact'
          }"
          @click="goToPage('contact')"
        >
          Contact Us
        </v-btn>
      </section>

      <section v-if="isMobile">
        <v-icon
          class="rounded pa-1 white--text"
          :class="{
            'blue': !showMenu,
            'red': showMenu
          }"
          @click="showMenu = !showMenu"
        >
          {{ showMenu ? 'mdi-close' : 'mdi-menu' }}
        </v-icon>

        <v-expand-transition>
          <v-list
            v-show="showMenu"
            class="white menu"
          >
            <v-list-item-group class="white">
              <v-list-item
                class="white d-flex justify-center pr-0 my-1"
                @click="goToPage('/')"
              >
                <v-list-item-title>
                  {{ "HOME" }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item
                class="white d-flex justify-center pr-0 my-1"
                @click="goToPage('/about')"
              >
                <v-list-item-title>
                  {{ "ABOUT" }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item
                class="white d-flex justify-center pr-0 my-1"
                @click="goToPage('/properties')"
              >
                <v-list-item-title>
                  {{ "PROPERTIES" }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item
                class="white d-flex justify-center pr-0 my-1"
                @click="goToPage('/how-to-buy')"
              >
                <v-list-item-title>
                  {{ "HOW TO BUY" }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item
                class="white d-flex justify-center pr-0 my-1"
                @click="goToPage('/faqs')"
              >
                <v-list-item-title>
                  {{ "FAQ" }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item
                class="white d-flex justify-center pr-0 my-1"
                @click="goToPage('/contact')"
              >
                <v-list-item-title>
                  {{ "CONTACT US" }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-expand-transition>
      </section>
    </v-app-bar>

    <!-- Mobile Menu -->
    <div />
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      pageName: 'index',
      showMenu: false
    }
  },

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xsOnly
    }
  },

  watch: {
    $route (to, from) {
      this.setPageName()
    }
  },

  methods: {
    goToPage (pageName) {
      if (!pageName) {
        this.$router.push('/')
      }
      this.$router.push(pageName)
      this.showMenu = false
    },

    setPageName () {
      this.pageName = this.$router.history.current.name
    }
  }
}
</script>

<style scoped>
  .app-bar-wrapper{
    z-index: 920;
    border-bottom: solid #2196F3 1px;
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  .menu{
    position: absolute;
    right: 0rem;
    left: 0rem;
    bottom: 0;
    top: 3.5rem;
    z-index: 999;
    padding: 0;
  }

  #appBar{
    position: relative;
  }

</style>
