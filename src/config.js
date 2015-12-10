import Vue from 'vue';
import VueRouter from 'vue-router'

import home from './pages/home'
import list from './pages/list'
import detail from './pages/detail'

let mapping = {
  '/': {
    component: home
  },
  '/list': {
    component: list
  },
  '/detail/:id': {
    component: detail
  }
}
export default mapping
