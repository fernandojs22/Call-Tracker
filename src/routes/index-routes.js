import React from 'react'
import {
    BrowserRouter as Router,
    useRoutes
} from 'react-router-dom'

import {
    ThemeProvider
} from '@material-ui/core'

import { theme } from '../assets/stytes/globalStyle'

import routes from './routes'

const RouterConfig = () => {
    const routing = useRoutes(routes)
    return (
        <ThemeProvider theme={theme}>
            <Router>
                {routing}
            </Router>
        </ThemeProvider>
    )
}

export default RouterConfig