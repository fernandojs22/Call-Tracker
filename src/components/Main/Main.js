import { useStyles } from '../../assets/stytes/globalStyle'

import Topbar from '../Layout/Topbar'

const Main = ({ children }) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Topbar classes={classes}/>
            <div className={classes.page}>
                <div className={classes.topbar} />
                {children}
            </div>
        </div>
    )
}

export default Main