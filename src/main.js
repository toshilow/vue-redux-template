import './main.scss'
import { createStore } from 'redux';
import reducers from './reducers';
import Vue from 'vue';
import reduxComp from "./components/redux"

new Vue({
  el: '#app',
  data: {
    store: createStore(reducers),
  },
  components: {
    'redux-comp': reduxComp,
  },
})
