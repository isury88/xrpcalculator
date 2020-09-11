export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  router: {
    base: "/"
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "XRP Profit Calculator" || "",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "A simple tool to calculate your XRP holdings"
      },
      { hid: "og:title", name: "og:title", content: "XRP Profit Calculator" },
      {
        hid: "og:description",
        name: "og:description",
        content: "A simple tool to calculate your XRP holdings"
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://xrpprofitcalculators.com"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: process.env.BASE_URL + "/assets/img/xrp-social.jpg"
      },
      { hid: "og:type", name: "og:type", content: "article" },
      {
        hide: "twitter:card",
        name: "twitter:card",
        content: process.env.BASE_URL + "/assets/img/xrp-social.jpg"
      },
      {
        hide: "twitter:site",
        name: "twitter:site",
        content: "/assets/img/xrp-logo.svg"
      }
    ].filter(x => x.content),
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],

  styleResources: {
    scss: ["~/assets/scss/main.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~plugins/filters.js", { src: "~plugins/ga.js", mode: "client" }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
