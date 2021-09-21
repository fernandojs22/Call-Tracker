import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Employees from './employees/reducer'
import User from './auth/user/reducer'

const rootReducer =  (history) => combineReducers({
    Employees,
    User,
    router: connectRouter(history)
})

export default rootReducer