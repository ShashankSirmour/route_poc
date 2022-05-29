/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composed = reduxDevTools
  ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  : compose(applyMiddleware(sagaMiddleware));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['route'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composed);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
