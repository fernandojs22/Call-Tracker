import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Calls from './Calls'
import Customers from './Customers'
import Dashboard from './Dashboard'
import Employees from './Employees'
import Settings from './Settings'
import ForgotPassword from './Auth/ForgotPassword'

import { history } from '../redux/store'

import {
    ThemeProvider
} from '@material-ui/core'

import Layout from '../components/Layout/Layout'
import Main from '../components/Main/Main'

import { theme } from '../assets/stytes/globalStyle'

import { useSelector } from 'react-redux'

const publicRoutes = [SignIn, SignUp, ForgotPassword]
const privateRoutes = [Calls, Customers, Dashboard, Employees, Settings]

const RouterConfig = () => {

    const { id_token } = useSelector(state => state.User)


    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                {
                    id_token ?
                        <Layout>
                            <Switch>
                                {privateRoutes.map(route => (
                                    <Route
                                        key={`Route-${route.path}`}
                                        path={route.path}
                                        component={route.component}
                                        exact
                                    />
                                ))}
                                <Route />
                                <Redirect to='/' />
                            </Switch>
                        </Layout>
                        :
                        <Main>
                            <Switch>
                                {publicRoutes.map(route => (
                                    <Route
                                        key={`Route-${route.path}`}
                                        path={route.path}
                                        component={route.component}
                                        exact
                                    />
                                ))}
                            </Switch>
                        </Main>
                }
            </Router>
        </ThemeProvider>
    )
}

export default RouterConfig