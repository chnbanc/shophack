import axios from 'axios'
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'shopHack',
    scipts: [
      { src: './assets/styles/owl-carousel/owl.carousel.min.js', body:true },
      { src: './assets/styles/elevatezoom/jquery.elevatezoom.min.js', body:true },
      { src: './assets/styles/imagesloaded/imagesloaded.pkgd.min.js', body:true },
      { src: './assets/styles/parallax/parallax.min.js', body:true },
      { src: './assets/styles/jquery/jquery.min.js', body:true },
      { src: './assets/styles/photoswipe/photoswipe.min.js', body:true },
      { src: './assets/styles/photoswipe/photoswipe-ui-default.min.js', body:true },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/styles/demo1.min.css',
    './assets/styles/style.min.css',
    './assets/styles/animate/animate.min.css',
    './assets/styles/fontawesome-free/css/all.min.css',
    './assets/styles/owl-carousel/owl.carousel.min.css',
    './assets/styles/photoswipe/photoswipe.min.css',
    './assets/styles/photoswipe/default-skin/default-skin.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],

  toast: {
    position: 'top-right',
    duration: 2000
  },


  chakra: {
    extendTheme: {
      colors: {
        brand: { /* ... */ }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
 },


  axios: {
    baseURL: 'https://jumga-flutterwave-solution-api.herokuapp.com/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'get' },
          user: { url: '/user', method: 'get', propertyName: false}
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  }
   
}
