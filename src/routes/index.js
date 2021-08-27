import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Calls from './Calls'
import Customers from './Customers'
import Dashboard from './Dashboard'
import Employees from './Employees'

const publicRoutes = [SignIn, SignUp]
const privateRoutes = [Calls, Customers, Dashboard, Employees]

const RouterConfig = () => {
    return (
        <Router>
            <Switch>
                {publicRoutes.map(({path,component: Component}) => (
                    <Route
                        key={`Route-${path}`}
                        path={path}
                              exact
                    >
                        <Component />
                    </Route>
                ))}
            </Switch>
            <Switch>
                {privateRoutes.map(({path,component: Component}) => (
                    <Route
                        key={`Route-${path}`}
                        path={path}
                              exact
                    >
                        <Component />
                    </Route>
                ))}
            </Switch>
        </Router>
    )
}

export default RouterConfig