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

const Topbar = ({ classes }) => {

    const user = {
        userName: 'Mario'
    }

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
                    {user.userName}
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