import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './services/reducer';

/**
 * Import Saga subscribers
 */
import {
  locationsApiSubscriber,
  podcastsApiSubscriber,
  connectGroupApiSubscriber,
  visitApiSubscriber
} from './services/saga';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

/**
 *
 * Run saga subscribers
 *
 */
sagaMiddleware.run(locationsApiSubscriber);
sagaMiddleware.run(podcastsApiSubscriber);
sagaMiddleware.run(connectGroupApiSubscriber);
sagaMiddleware.run(visitApiSubscriber);

export default store;
