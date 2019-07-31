module.exports = {
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hunni.Devteam',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Software Engineer, Hun Kang's Personal Blog" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/fontAwesome', ssr: true },
    { src: '~plugins/vueMoment', ssr: true },
    { src: '~plugins/tuiEditor', ssr: false },
    { src: '~plugins/components', ssr: true }
  ]
}

