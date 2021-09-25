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

import { useDispatch } from 'react-redux'

import { signOutAction } from '../../redux/auth/signOut/actions'

import { options } from '../../constants/options'
import Logo from '../../components/Logo'

const Navbar = ({ classes }) => {

    const dispatch = useDispatch()

    const history = useHistory()
    const location = useLocation()

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
                {options.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.activeMenu : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                ))}
                <ListItem
                        button
                        key={'Logout'}
                        onClick={() => dispatch(signOutAction(() => history.push('/')))}
                    >
                        <ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
                        <ListItemText>{'Logout'}</ListItemText>
                    </ListItem>
            </List>
        </Drawer>

    )
}

export default Navbar