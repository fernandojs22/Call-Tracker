import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    IconButton,
    Badge
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    NotificationsOutlined as NotificationsOutlinedIcon
} from '@material-ui/icons'

import { useDispatch } from 'react-redux'

import { changeLanguage } from '../../redux/language-switcher/actions'

import config from '../../redux/language-switcher/config'

import IntlMessages from '../Utils/IntlMessages'

const Topbar = ({ classes }) => {

    const dispatch = useDispatch()

    return (
        <AppBar
            elevation={1}
            className={classes.appbar}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="end"
                    aria-label="menu"
                >
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Typography
                    variant="h4"
                    component="h1"
                    className={classes.appbarTitle}
                >
                    <IntlMessages id="topbar.calls-list" /> 
                </Typography>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                >
                    <Badge
                        variant="standard"
                        color="error"
                        badgeContent={99}
                    >
                        <NotificationsOutlinedIcon />
                    </Badge>
                </IconButton>
                <Typography>
                    {config.options.map(option => {
                        const { languageId, icon: Icon } = option;

                        return (
                            <IconButton
                                color="inherit"
                                key={languageId}
                                onClick={() => dispatch(changeLanguage(languageId))}
                            >
                                <Icon />
                            </IconButton>
                        )
                    })}
                </Typography>
                <Avatar
                    src='/user.jpeg'
                    className={classes.avatar}
                />

            </Toolbar>
        </AppBar>
    )
}

export default Topbar