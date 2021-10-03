import React from 'react'
import {
    Router,
    useRoutes
} from 'react-router-dom'

import { history } from '../redux/store'

import {
    ThemeProvider
} from '@material-ui/core'

import { theme } from '../assets/stytes/globalStyle'

import routes from './routes'

const RouterConfig = () => {
    const routing = useRoutes(routes)
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                {routing}
            </Router>
        </ThemeProvider>
    )
}

export default RouterConfig