import { useState } from 'react'

import {
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField
} from '@material-ui/core'

import { useDispatch } from 'react-redux'

import { setEmployee } from '../../redux/employees/actions'

import AvatarShortBox from '../Avatar/AvatarShortBox'

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};


const Sessions = ({ classes, sessions, employee }) => {

    const dispatch = useDispatch()
    const sessionList = Object.keys(sessions)

    const [employeeState, setEmployeeState] = useState(employee)
    
    const handleChange = (e) => {
        setEmployeeState({ ...employeeState, [e.target.name]: e.target.value })
        dispatch(setEmployee({ ...employeeState, [e.target.name]: e.target.value }))
    }

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item lg={sessionList.length % 2 === 0 ? 12 : 6}>
                <AvatarShortBox user={user} classes={classes} />

            </Grid>
            {sessionList.map((session) => {
                if (session !== 'avatar') {
                    return (
                        <Grid item lg={6} key={session}>
                            <Card elevation={1} className={classes.sessionCard}>
                                <CardHeader
                                    avatar={
                                        <Avatar>
                                            {`${session}`[0].toUpperCase()}
                                        </Avatar>
                                    }
                                    title={`${session}`.toUpperCase()}
                                    subheader="The information can be edited"
                                />
                                <CardContent>
                                    <Typography component="span" variant="body2">
                                        {
                                            sessions[`${session}`].map((field) => {
                                                return (
                                                    <TextField
                                                        key={field.field}
                                                        variant="outlined"
                                                        fullWidth
                                                        label={field.label}
                                                        multiline={field.multiline}
                                                        minRows={6}
                                                        required={field.required}
                                                        className={classes.field}
                                                        id={field.field}
                                                        name={field.field}
                                                        value={employeeState[field.field]}
                                                        onChange={(e) => handleChange(e)}
                                                    />
                                                )
                                            })
                                        }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                } else {
                    return <div></div>
                }
            })}
        </Grid>
    )
}

export default Sessions