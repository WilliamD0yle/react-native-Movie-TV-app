import { SEARCH_FETCH, CLEAR_SEARCH_STATE } from '../Actions/types';

const INITIAL_STATE = {
data: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_FETCH:
      return {...state, data: action.payload};
    case CLEAR_SEARCH_STATE:
      state = INITIAL_STATE;
      return state;
    default:
      return state;
  }
};
