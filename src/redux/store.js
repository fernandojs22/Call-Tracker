import { createStore, applyMiddleware } from 'redux'
import { /*rootReducer,*/ persistedReducer } from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore } from 'redux-persist'

const createHistory = require("history").createBrowserHistory;
export const history = createHistory()

const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(persistedReducer(history), composeWithDevTools(applyMiddleware(...middlewares)))

const persistor = persistStore(store)

export { store, persistor }