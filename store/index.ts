import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import tasks from './tasks/reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  (process.env.ENVIROMENT === 'DEV' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const loggerMiddleware = createLogger()

const store = createStore(
  combineReducers({
    tasks,
  }),
  composeEnhancers(applyMiddleware(loggerMiddleware))
)

export default store
