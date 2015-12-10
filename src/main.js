import './main.scss'

import Vue from 'vue';
import VueRouter from 'vue-router'
import routing from "./config"

Vue.use(VueRouter)

const router = new VueRouter({
  //history: true,
  hashbang:true,
  saveScrollPosition: true
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

const App = new Vue({})
router.map(routing)
router.start(App, '#app')
