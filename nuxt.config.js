import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Adili Real Estate',
    title: 'Adili Real Estate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Adili is a registered land-selling company that navigates Kenya to find the lands that promise the highest returns on your investment.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'Diani, plots, pazurina, ukunda, holiday homes, plots for sale, kwale, beach plots, beach plots for sale, beach plots for sale in diani, beach plots for sale in ukunda, beach plots for sale in mombasa, beach plots for sale in kenya, beach plots for sale' },
      { name: 'og:title', content: 'Adili Real Estate' },
      { name: 'og:description', content: 'Get Prime South Coast Plots' },
      { name: 'og:image', content: 'https://adilirealestate.com/logo.png' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image:width', content: '60' },
      { name: 'og:image:height', content: '60' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },

      // Load Poppins font (400, 500, 600, 700 weights)
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' 
      },
      
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
