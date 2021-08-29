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
import Settings from './Settings'

import {
    ThemeProvider
} from '@material-ui/core'

import Layout from '../components/Layout/Layout'
import { theme } from '../assets/stytes/globalStyle'

const publicRoutes = [SignIn, SignUp]
const privateRoutes = [Calls, Customers, Dashboard, Employees, Settings]

const RouterConfig = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        {publicRoutes.map(({ path, component: Component }) => (
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
                        {privateRoutes.map(({ path, component: Component }) => (
                            <Route
                                key={`Route-${path}`}
                                path={path}
                                exact
                            >
                                <Component />
                            </Route>
                        ))}
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

export default RouterConfig