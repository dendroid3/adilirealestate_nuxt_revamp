<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container id="appContainer">
        <Nuxt />
      </v-container>
    </v-main>
    <footer-section />
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  name: 'DefaultLayout',

  components: {
    NavBar,
    FooterSection
  },

  data () {
    return {

    }
  },

  mounted () {
    // Get height of desktop navbar
    const navBarElement = document.getElementById('navBar')

    if (!navBarElement) {
      return
    }

    const navBarHeight = navBarElement.offsetHeight

    // Get app container
    const appContainer = document.getElementById('appContainer')

    // set margin top to the app
    appContainer.style.marginTop = `${navBarHeight}px`
  }
}
</script>
<style>
  .pointer{
    cursor: pointer;
  }
</style>
