<template>
  <div class="pt-4">
    <available-properties-section />

    <properties-section />
  </div>
</template>

<script>
import AvailablePropertiesSection from '../components/home/AvailablePropertiesSection.vue'
import PropertiesSection from '../components/home/PropertiesSection.vue'

export default {
  name: 'Properties',

  components: {
    AvailablePropertiesSection,
    PropertiesSection
  },

  head () {
    return {
      title: 'Properties'
    }
  }
}
</script>
