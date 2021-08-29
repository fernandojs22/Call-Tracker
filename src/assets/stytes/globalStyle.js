import {
    createTheme,
    makeStyles
} from '@material-ui/core'

export const theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})

const drawerWidth = 215
const drawerMarginTop = 64

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(1)
        },
        drawer: {
            width: drawerWidth,
            marginTop: drawerMarginTop
        },
        navbarTitle: {
            padding: theme.spacing(1)
        },
        activeMenu: {
            backgroundColor: theme.palette.grey[300]
        },
        appbarTitle: {
            flexGrow: 1,
            marginLeft: theme.spacing(1)
        },
        appbar: {
            // width: `calc(100% - ${drawerWidth}px)`
            height: `${drawerMarginTop}px)`
        },
        topbar: theme.mixins.toolbar,

        avatar: {
            marginLeft: theme.spacing(2)
        },
        menuButton: {
            marginLeft: theme.spacing(2)
        },
        field: {
            display: 'block'
        },
        submitBtn: {
            marginTop: 20
        },
        avatarCard: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }
})
