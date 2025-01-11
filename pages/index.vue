<template>
  <div class="pa-0">
    <hero-section />

    <about-section />

    <how-to-buy-section />
  </div>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import HowToBuySection from '../components/home/HowToBuySection.vue'

export default {
  name: 'Home',

  components: {
    HeroSection,
    AboutSection,
    HowToBuySection
  },

  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
