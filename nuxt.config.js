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
        content:
          "If you find yourself wondering how the price of XRP will affect your holdings value, check one of the two below to help you out."
      },
      { hid: "og:title", name: "og:title", content: "XRP Profit Calculator" },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "If you find yourself wondering how the price of XRP will affect your holdings value, check one of the two below to help you out."
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://xrpprofitcalculators.com"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "/assets/img/xrp-social.jpg"
      },
      { hid: "og:type", name: "og:type", content: "article" },
      {
        hide: "twitter:card",
        name: "twitter:card",
        content: "/assets/img/xrp-social.jpg"
      },
      {
        hide: "twitter:site",
        name: "twitter:site",
        content: "/assets/img/xrp-social.jpg"
      },
      {
        name: "google-site-verification",
        content: "Du2p7OYZSgM50YF9cMGPa98sNPYxgszYqoLGE_Rl26Q"
      }
    ].filter(x => x.content),
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
        rel: "stylesheet"
      }
    ],
    link: [
      {
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
        rel: "stylesheet"
      }
    ],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        "data-ad-client": "ca-pub-3626958281642949",
        async: true
      }
    ]
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
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-3626958281642949"
      }
    ]
  ],
  sitemap: {
    hostname: "https://xrpprofitcalculators.com",
    lastmod: "2020-09-12",
    sitemaps: [
      {
        path: "/sitemap.xml",
        gzip: true
      }
    ]
  },
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
