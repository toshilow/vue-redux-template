import Vue from 'vue';
import template from './template.html';

import { createStore } from 'redux';
import reducers from '../../reducers';
import reduxComp from "../../components/redux"

export default Vue.extend({
  template: template,
  data: () => {
    return {
      store: createStore(reducers),
    }
  },
  components: {
    'redux-comp': reduxComp,
  },
});