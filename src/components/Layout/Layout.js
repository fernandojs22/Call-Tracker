import {
    makeStyles
} from '@material-ui/core'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {

})

const Layout = ({ children }) => {
    
    const classes = useStyles()

    return (
        <div>
            {children}
        </div>
    )
}

export default Layout