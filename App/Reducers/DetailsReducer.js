import { DETAILS_FETCH, CLEAR_STATE } from '../Actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAILS_FETCH:
      return action.payload;
    case CLEAR_STATE:
      state = INITIAL_STATE;
      return state;
    default:
      return state;
  }
};
