import { TRAILER_FETCH } from '../Actions/types';

const INITIAL_STATE = {
  id: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAILER_FETCH:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
