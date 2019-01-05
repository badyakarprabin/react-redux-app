import thunk from 'redux-thunk';
import { compose } from 'recompose';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducer';

const enhancers = [applyMiddleware(thunk, promiseMiddleware())];

if (window['__REDUX_DEVTOOLS_EXTENSION__']) {
  enhancers.push(window['__REDUX_DEVTOOLS_EXTENSION__']());
}

// For presisting the store.
const persistConfig = {
  key: 'root',
  storage: storage
};


const persistReducerConfig = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistReducerConfig, compose(...enhancers));
export const persistor = persistStore(store);

export default store;
