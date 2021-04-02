import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const middleWare = [thunk];

const store = createStore(
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;