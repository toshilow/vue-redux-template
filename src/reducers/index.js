import { combineReducers } from 'redux'
import * as types from '../constants/ActionType'

const initialState = {
  currentState: 'Vue + Webpack',
};

function myState(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_STATE:
      return {
        currentState: action.nextState,
      };

    default:
      return state;
  }
}
const rootReducer = combineReducers({
    myState: myState,
})

export default rootReducer
