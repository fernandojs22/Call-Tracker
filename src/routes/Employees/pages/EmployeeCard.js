import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import {
    Container,
    Button,
    Grid,
    Divider,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon,
    Cancel as CancelIcon
} from '@material-ui/icons'

import { putEmployee, postEmployee, deleteEmployee } from '../../../redux/employees/actions'

import { sessions } from '../models/employeesSessions'
// import Sessions from '../../../components/SessionsCards/SessionCard'

import EmployeesList from './EmployeesList'

import AvatarShortBox from '../../../components/Avatar/AvatarShortBox'

import IntlMessages from '../../../components/Utils/IntlMessages'

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

const EmployeeCard = ({ classes, employee }) => {

    const [employeeState, setEmployeeState] = useState(employee)
    
    const handleChange = (e) => {
        setEmployeeState(prevState => { return { ...prevState, [e.target.name]: e.target.value }})
    }

    const dispatch = useDispatch()
    const history = useHistory()

    const sessionList = Object.keys(sessions)
    const listFields = []

    sessionList.map((session) => {
        return sessions[`${session}`].map((field) => {
            if (field['listResultId']) {
                listFields.push(field)
            }
            return true
        })
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (buttonName === 'UPDATE') {
            dispatch(putEmployee(
                employeeState,
                () => {
                    history.push('/')
                },
                () => {

                }
            ))

        } else if (buttonName === 'CREATE') {
            dispatch(postEmployee(
                employeeState,
                () => {
                    history.push('/')
                },
                () => {

                }
            ))
        } else if (buttonName === 'DELETE') {
            dispatch(deleteEmployee(
                employeeState,
                () => {
                    history.push('/')
                },
                () => {

                }
            ))
        }

    }

    const [buttonName, setButtonName] = useState('')

    const [cardFlag, setCardFlag] = useState(true)

    const employeesList = (e) => {
        setCardFlag(false)
        setButtonName(e.target.innerText)
    }

    const Sessions = () => {
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
                                                            label={<IntlMessages id={field.label} />}
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

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                {cardFlag ? Sessions() : <EmployeesList classes={classes} listFields={listFields} />}
                {cardFlag ? <Divider /> : null}
                {
                    cardFlag ?
                        <Grid container>
                            <Grid item lg={12}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="inherit"
                                    className={classes.submitBtn}
                                    endIcon={<KeyboardArrowRightIcon />}
                                    value="update"
                                    onClick={(e) => setButtonName(e.target.innerText)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    className={classes.submitBtn}
                                    endIcon={<KeyboardArrowRightIcon />}
                                    value="create"
                                    onClick={(e) => setButtonName(e.target.innerText)}
                                >
                                    Create
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submitBtn}
                                    endIcon={<CancelIcon />}
                                    id="cancel"
                                    onClick={(e) => employeesList(e)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    className={classes.submitBtn}
                                    endIcon={<CancelIcon />}
                                    id="delete"
                                    onClick={(e) => setButtonName(e.target.innerText)}
                                >
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                        :
                        null
                }
            </form>
        </Container>
    )
}

export default EmployeeCard