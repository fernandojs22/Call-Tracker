import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { useStyles } from '../../../assets/stytes/globalStyle'

import { sessions } from '../models/employeesSessions'
import EmployeesList from './EmployeesList'

import { fetchEmployees } from '../../../redux/employees/actions'

const Employees = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const classes = useStyles()
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

    useEffect(() => {
        dispatch(fetchEmployees(
            (error) => {
                alert(error)
                history.push('/')
            }
        ))
    },[dispatch, history])

    return (
        <EmployeesList classes={classes} listFields={listFields} />
    )
}

export default Employees