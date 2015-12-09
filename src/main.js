require('./main.scss')

const Vue = require('vue')
const app = new Vue({
  el: '#app',
  data: {
    title: "Vue and Redux",
    view: 'page-a'
  },
  components: {
    'page-a': function (resolve) {
      console.log('Call A')
      require(['./views/a'], resolve)
    },
    'page-b': function (resolve) {
      console.log('Call B')
      require(['./views/b'], resolve)
    }
  }
})

/**
 * Some really crude routing logic here, just for
 * demonstration purposes. The key thing to note here is
 * that we are simply changing the view of the root app -
 * Vue's async components and Webpack's code splitting will
 * automatically handle all the lazy loading for us.
 */

function route() {
  app.view = window.location.hash.slice(1) || 'page-a'
}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)
