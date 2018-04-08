import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState);
}
