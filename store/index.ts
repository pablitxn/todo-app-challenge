import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from 'redux/reducers';
import rootSaga from 'redux/sagas';

import notificationMiddleware from 'redux/middlewares/notification.middleware';
import redirectMiddleware from 'redux/middlewares/redirect.middleware';
import storageMiddleware from 'redux/middlewares/storage.middleware';

import { ENVIRONMENTS } from 'helpers/enums/environments';
import { ENVIRONMENT } from 'configs/configs';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (ENVIRONMENT !== ENVIRONMENTS.production &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      notificationMiddleware,
      redirectMiddleware,
      storageMiddleware,
      loggerMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
