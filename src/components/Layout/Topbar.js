import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    IconButton,
    Badge,
    // SvgIcon
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    NotificationsOutlined as NotificationsOutlinedIcon
} from '@material-ui/icons'

import { useDispatch } from 'react-redux'

import { changeLanguage } from '../../redux/language-switcher/actions'

import config from '../../redux/language-switcher/config'

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
                    Call List
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
                        const { languageId, icon } = option;

                        return (
                            <IconButton
                                color="inherit"
                                key={languageId}
                                onClick={() => dispatch(changeLanguage(languageId))}
                            >
                                <img src={icon} alt="flag" width="3%" />
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