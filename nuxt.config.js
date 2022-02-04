export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eKatering',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ''},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3' },
    ],
  },

  env: {
    SITE_NAME: process.env.SITE_NAME,
    STRIPE_PK: process.env.STRIPE_PK,
  },

     /*
      ** Global CSS
      */

     css: [
         "vue-multiselect/dist/vue-multiselect.min.css",
         '@/node_modules/vue-file-agent/dist/vue-file-agent.css',
         '@/assets/css/style.css',
         '@/node_modules/ag-grid-community/dist/styles/ag-grid.css',
         '@/node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css',
     ],
     /*
      ** Plugins to load before mounting the App
      */
     plugins: [
         '~/plugins/vue-tailwind.js',
         { src: "~/plugins/vee-validate"},
         { src: '~/plugins/vue-stripe.js', ssr: false },
         { src: '~/plugins/vue-toastification.js',ssr: false },
         { src: '~/plugins/ag-grid-client.js',ssr: false },
         { src: '~/plugins/vue-file-agent.js',ssr: false },
         { src: '~/plugins/click-outside', ssr: false },
         { src: '~/plugins/vue-dialog', ssr: false },
         { src: '~/plugins/vue-moment',ssr: false },
     ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      
      
     
      
      {
        path: '~/components/Header/'
      },
      
      {
        path: '~/components/ListActions/'
      },
      {
        path: '~/components/Loader/'
      },
      
      {
        path: '~/components/Profile/'
      },
      

      {
        path: '~/components/User/'
      },

    ]
  },

  //apollo
  apollo: {
    clientConfigs: {
      default: {
         httpEndpoint: 'https://api.ekatering.co.uk/graphql',
          //  httpEndpoint: 'http://localhost:4000/graphql',


      }
    },
    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },

    // Sets the authentication type for any authorized request.
    authenticationType: 'Bearer',

    // Token name for the cookie which will be set in case of authentication
    tokenName: 'apollo-token',

    // [deprecated] Enable the graphql-tag/loader to parse *.graphql/*.graphql files
    includeNodeModules: true,

    // Cookie parameters used to store authentication token
    cookieAttributes: {
      /**
        * Define when the cookie will be removed. Value can be a Number
        * which will be interpreted as days from time of creation or a
        * Date instance. If omitted, the cookie becomes a session cookie.
        */
      expires: 30,

      /**
        * Define the path where the cookie is available. Defaults to '/'
        */
      path: '/',

      /**
        * A Boolean indicating if the cookie transmission requires a
        * secure protocol (https). Defaults to false.
        */
      secure: false,
    }

  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  vue: {
    config: {
        productionTip: false,
        devtools: true
    }
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
        'vee-validate'
    ]
},
}
