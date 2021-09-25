import {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

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

import { putEmployee, postEmployee, deleteEmployee } from '../../../redux/employees/actions'

import { sessions } from '../models/employeesSessions'
import Sessions from '../../../components/SessionsCards/SessionCard'

import EmployeesList from './EmployeesList'

const EmployeeCard = ({ classes, employee }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const { employee: employeeState } = useSelector(state => state.Employees)

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