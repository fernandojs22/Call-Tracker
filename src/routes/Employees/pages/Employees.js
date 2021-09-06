import { useEffect } from 'react'

import { useStyles } from '../../../assets/stytes/globalStyle'

import { sessions } from '../models/employeesSessions'
import EmployeesList from './EmployeesList'

import { fetchEmployees } from '../../../redux/employees/actions'

import { useDispatch } from 'react-redux'

const Employees = () => {

    const dispatch = useDispatch()

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
        dispatch(fetchEmployees())
    },[dispatch])

    return (
        <EmployeesList classes={classes} listFields={listFields} />
    )
}

export default Employees