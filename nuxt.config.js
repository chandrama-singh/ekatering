export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ekatering',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/Content/'
      },
      {
        path: '~/components/Coupon/'
      },
      {
        path: '~/components/Course/'
      },
      {
        path: '~/components/Footer/'
      },
      {
        path: '~/components/Header/'
      },
      {
        path: '~/components/HomePage/'
      },
      {
        path: '~/components/ListActions/'
      },
      {
        path: '~/components/Loader/'
      },
      {
        path: '~/components/Package/'
      },
      {
        path: '~/components/Profile/'
      },
      {
        path: '~/components/Setting/'
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
        //httpEndpoint: 'https://ekatering.com/api/graphql',
         httpEndpoint: 'http://localhost:4000/graphql',
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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
