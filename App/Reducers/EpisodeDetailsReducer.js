import { EPISODE_DETAILS_FETCH, CLEAR_EPISODE_STATE } from '../Actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EPISODE_DETAILS_FETCH:
      return action.payload;
    case CLEAR_EPISODE_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
