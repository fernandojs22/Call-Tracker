import {
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardContent
} from '@material-ui/core'

import FormFields from '../Form/FormFields'

import AvatarShortBox from '../Avatar/AvatarShortBox'

const Sessions = ({ classes, sessions }) => {

    const sessionList = Object.keys(sessions)

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item lg={sessionList.length % 2 === 0 ? 12 : 6}>
                <AvatarShortBox classes={classes}/>

            </Grid>
            {sessionList.map((session) => (
                <Grid item lg={6}>
                    <Card elevation={1}>
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
            ))}
        </Grid>
    )
}

export default Sessions