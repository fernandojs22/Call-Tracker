import {
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardContent
} from '@material-ui/core'

import FormFields from '../Form/FormFields'

import AvatarShortBox from '../Avatar/AvatarShortBox'

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};


const Sessions = ({ classes, sessions }) => {

    const sessionList = Object.keys(sessions)

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
                                    <FormFields session={session} sessions={sessions} classes={classes} />
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