import { useHistory, useLocation } from 'react-router-dom'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core'

import { options } from '../../constants/options'
import Logo from '../../components/Logo'

const Navbar = ({ classes }) => {

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
            </List>
        </Drawer>

    )
}

export default Navbar