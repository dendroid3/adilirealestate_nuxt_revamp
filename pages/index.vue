<template>
  <div class="pa-0">
    <hero-section />

    <about-section />

    <available-properties-section />

    <how-to-buy-section />

    <faqs-section />
  </div>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import HowToBuySection from '../components/home/HowToBuySection.vue'
import FaqsSection from '../components/home/FaqsSection.vue'
import AvailablePropertiesSection from '../components/home/AvailablePropertiesSection.vue'

export default {
  name: 'Home',

  components: {
    HeroSection,
    AboutSection,
    HowToBuySection,
    FaqsSection,
    AvailablePropertiesSection
  },

  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
