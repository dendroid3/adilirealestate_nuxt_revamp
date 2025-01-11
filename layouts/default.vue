<template>
  <v-app>
    <nav-bar />
    <v-main>
      <div id="appContainer">
        <Nuxt />
      </div>
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
    appContainer.style.minHeight = `calc(100vh - ${navBarHeight}px)`
  }
}
</script>

<style>
html{
  width: 100vw;
  overflow: auto;
  font-family: 'Poppins', sans-serif;

}
#app{
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

body{
  overflow-y: auto;
  height: 100vh;
  pointer-events: auto;
}

.heading{
  font-size: 27px;
}

.sub-heading{
  font-size: 18px;
}

.body-text{
  font-size: 14px;
}

.caption{
  font-size: 8px;
}

.bold-1{
  font-weight: 900;
}

.bold-2{
  font-weight: 900;
}

.cta{
  background: #ec2027;
}

.main{
  overflow-x: hidden;
  margin: 0;
}
.title{
  display: flex;
  width: 100%;
  text-justify: center;
  justify-content: center;
  justify-items: center;
}

.bold{
  font-weight: 800;
}

.backg{
  background-color: #c4c4c4;
}
.backg--text{
  color: rgba(21,110,82,1);
  font-size: 2.3rem;
}

.half{
  border-right: solid 1px white;
}

.backg-2{
  background-color: rgb(15,14,56);
}

.w-100{
  width: 100%;
}

.full-page{
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 901;
  top: 0;
}

.menu{
  position: fixed;
  top: o;
  z-index: 900;
}

@keyframes fixed-1 {
  0%{ }
  25%{ }
  50%{ color: rgb(98, 0, 255); }
  100%{ }
}

.search-2{
  text-align: center;
  max-width: 30%;
  height: 2rem;
  border-radius: 15px;
  border: solid purple 1px;
  outline: 0;
  background-color: white;
}

.pointer{
  cursor: pointer;
}

.red-border{
  border-left: solid 4px red !important;
}
.green-border{
  border-left: solid 4px green;
}
.filter{
  border-left: solid purple 1px;
  border-top: solid purple 1px;
  border-bottom: solid purple 1px;
}
/* width */
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  direction:rtl;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  direction:rtl;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;
  direction:rtl;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: red;
}

a{
  text-decoration: none;
}

.secondary-color {
  background-color: #231F20;
}

.pale-blue{
  background-color: #48aaf912;
}
</style>
