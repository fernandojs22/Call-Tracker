import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core'

import {
    PowerSettingsNew as PowerSettingsNewIcon
} from '@material-ui/icons'

import { useDispatch, useSelector } from 'react-redux'

import { signOutAction } from '../../redux/auth/signOut/actions'

import { options } from '../../constants/options'
import Logo from '../../components/Logo'

import IntlMessages from '../Utils/IntlMessages'

const Navbar = ({ classes }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.User)

    const history = useHistory()
    const location = useLocation()

    const allowedRoles = (options) => {
        try {
            return user.roles.some(role => options.includes(role))
        } catch (err) {
            return false
        }      
    }

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            classes={{ paper: classes.drawer }}
        >
            <Typography
                variant="h6"
                className={classes.navbarTitle}
                align="center"
            >
                <Logo />
            </Typography>
            <List>
                {options.map((item) => {
                    if (allowedRoles(item.allowedRoles)) {
                    return (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.activeMenu : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    )
                    } else {
                        return null
                    }
                })}
                <ListItem
                    button
                    key={'Logout'}
                    onClick={() => dispatch(signOutAction(() => history.push('/')))}
                >
                    <ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
                    <ListItemText><IntlMessages id="navbar.logout" /></ListItemText>
                </ListItem>
            </List>
        </Drawer>

    )
}

export default Navbar