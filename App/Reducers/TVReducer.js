import { TV_FETCH, CLEAR_TV_STATE } from '../Actions/types';

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TV_FETCH:
      return {data: [...state.data,...action.payload]};
    case CLEAR_TV_STATE:
      state = INITIAL_STATE;
      return state;
    default:
      return state;
  }
};
