import {
    AppBar,
    Toolbar,
    Typography,
    Avatar
} from '@material-ui/core'

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
                <Typography
                    variant="h4"
                    component="h1"
                    className={classes.appbarTitle}
                >
                    Call List
                </Typography>
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