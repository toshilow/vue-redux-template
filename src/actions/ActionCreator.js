import * as types from '../constants/ActionType'

export function changeMyState(nextState) {
  return {
    type: types.CHANGE_STATE,
    nextState: nextState,
  };
}