import { /*useEffect,*/ useState } from 'react'

import {
    Container,
    Button,
    Grid,
    Divider
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon,
    Cancel as CancelIcon
} from '@material-ui/icons'

import { sessions } from '../models/employeesSessions'
import Sessions from '../../../components/SessionsCards/SessionCard'

import EmployeesList from './EmployeesList'

const EmployeeCard = ({ classes, employee }) => {

    // const [updateFlag, setUpdateFlag] = useState(false)

    // useEffect(() => {
    //     if (typeof Array.isArray(employee) && employee.length > 0 ) {
    //         setUpdateFlag(true)
    //     } 
    // },[employee])

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
    }

    const [cardFlag, setCardFlag] = useState(true)

    const employeesList = () => {
        setCardFlag(false)
    }

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                {cardFlag ? <Sessions classes={classes} sessions={sessions} employee={employee} /> : <EmployeesList classes={classes} listFields={listFields} />}
                {cardFlag ? <Divider /> : null}
                {
                    cardFlag ?
                        <Grid container>
                            <Grid item lg={12}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    className={classes.submitBtn}
                                    endIcon={<KeyboardArrowRightIcon />}
                                    name="save"
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submitBtn}
                                    endIcon={<CancelIcon />}
                                    name="cancel"
                                    onClick={() => employeesList()}
                                >
                                    Cancel
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