import {createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from 'redux-devtools-extension'

const createHistory  = require("history").createBrowserHistory;
export const history = createHistory()

const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(...middlewares)))

export { store }