import pkg from './package'
import info from './content/setup/info'
import path from 'path'
import glob from 'glob'

var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/*.json',
  '/page': 'page/*.json',
});

console.log(dynamicRoutes);

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: info.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/ajax-loader.gif' },
      { rel: 'stylesheet', href: '/css/animate.css' },
      { rel: 'stylesheet', href: '/css/aos.css' },
      { rel: 'stylesheet', href: '/css/bootstrap-datepicker.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/flaticon.css' },
      { rel: 'stylesheet', href: '/css/icomoon.css' },
      { rel: 'stylesheet', href: '/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/css/jquery.timepicker.css' },
      { rel: 'stylesheet', href: '/css/magnific-popup.css' },
// All of the JS files... what should the rel: be?
      { rel: 'preload', href: '/css/open-iconic-bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/mixins/_text-hide.css' },
      { rel: 'stylesheet', href: '/css/.DS_Store' },
      { rel: 'stylesheet', href: '/css/bootstrap-reboot.css' },
      { rel: 'stylesheet', href: '/js/bootstrap.min.js' },
      { rel: 'stylesheet', href: '/js/google-map.js' },
      { rel: 'stylesheet', href: '/js/jquery-3.2.1.min.js' },
      { rel: 'stylesheet', href: '/js/jquery-migrate-3.0.1.min.js' },
      { rel: 'stylesheet', href: '/js/jquery.animateNumber.min.js' },
      { rel: 'stylesheet', href: '/js/jquery.easing.1.3.js' },
      { rel: 'stylesheet', href: '/js/jquery.magnific-popup.min.js' },
      { rel: 'stylesheet', href: '/js/jquery.min.js' },
      { rel: 'stylesheet', href: '/js/jquery.stellar.min.js' },
      { rel: 'stylesheet', href: '/js/jquery.waypoints.min.js' },
      { rel: 'stylesheet', href: '/js/main.js' },
      { rel: 'stylesheet', href: '/js/owl.carousel.min.js' },
      { rel: 'stylesheet', href: '/js/popper.min.js' },
      { rel: 'stylesheet', href: '/js/scrollax.min.js' },

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true


  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  generate: {
    routes: dynamicRoutes
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
