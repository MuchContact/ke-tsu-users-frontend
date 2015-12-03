import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
//import createHistory from 'history/lib/createBrowserHistory'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index'
import routes from '../routers'

const logger = createLogger();
var combinedCreateStore = compose(reduxReactRouter({ routes, createHistory }))(createStore);
var finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  //if (module.hot) {
  //  // Enable Webpack hot module replacement for reducers
  //  module.hot.accept('../reducers', () => {
  //    const nextRootReducer = require('../reducers');
  //    store.replaceReducer(nextRootReducer)
  //  })
  //}

  return store
}
