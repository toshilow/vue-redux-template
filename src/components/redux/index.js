import './style.scss';
import Vue from 'vue';
import template from './template.html';

import * as actions from "../../actions/ActionCreator"

export default Vue.extend({
  template: template,
  data() {
    return {
      currentState: this.store.getState().myState.currentState,
    };
  },
  props: ['store'],
  created() {
    this.store.subscribe(()=> {
      this.currentState = this.store.getState().myState.currentState;
    });
  },
  methods:{
    onClickAndDispatch() {
      const nextState = 'Vue + Webpack + Redux';
      this.store.dispatch(actions.changeMyState(nextState));
    }
  }
});