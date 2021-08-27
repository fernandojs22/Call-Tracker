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

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            display:'flex'
        },
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(2)
        },
        drawer: {
            width: drawerWidth
        },
        navbarTitle: {
            padding: theme.spacing(1)
        },
        activeMenu: {
            backgroundColor: theme.palette.grey[300]
        },
        appbarTitle: {
            flexGrow: 1
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        topbar: theme.mixins.toolbar,
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})
