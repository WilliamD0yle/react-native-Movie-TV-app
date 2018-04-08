// Wherever you build your reducers
import AppNavigation from '../Navigation/AppNavigation'
import MoviesReducer from './MovieReducer'
import TrailerReducer from './TrailerReducer';

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
};

const rootReducer = combineReducers({
  nav: navReducer,
  movies: MoviesReducer,
  trailer: TrailerReducer
});
