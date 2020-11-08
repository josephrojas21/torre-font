import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(ReduxThunk, routerMiddleware(history))];

  const store = createStore(rootReducer(history), initialState, compose(...enhancers));
  return store
}
