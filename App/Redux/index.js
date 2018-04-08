import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import AppNavigation from '../Navigation/AppNavigation';
import MoviesReducer from '../Reducers/MovieReducer'

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
};

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer,
    movies: MoviesReducer
  });

  // return store
  return createStore(rootReducer)
};
