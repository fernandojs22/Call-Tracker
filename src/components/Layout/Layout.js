import { useStyles } from '../../assets/stytes/globalStyle'

import Navbar from './Navbar'
import Topbar from './Topbar'

const Layout = ({ children }) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Navbar classes={classes}/>
            <Topbar classes={classes}/>
            <div className={classes.page}>
                <div className={classes.topbar} />
                {children}
            </div>
        </div>
    )
}

export default Layout