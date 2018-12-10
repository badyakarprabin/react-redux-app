import thunk from 'redux-thunk';
import { compose } from 'recompose';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducer';

// const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

const enhancers = [applyMiddleware(thunk, promiseMiddleware())];

if (window['__REDUX_DEVTOOLS_EXTENSION__']) {
  enhancers.push(window['__REDUX_DEVTOOLS_EXTENSION__']());
}

const store = createStore(rootReducer, compose(...enhancers));

export default store;
