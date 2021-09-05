import { useStyles } from '../../../assets/stytes/globalStyle'

import { sessions } from '../models/employeesSessions'
import EmployeesList from './EmployeesList'

const Employees = () => {
    
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

    return (
        <EmployeesList classes={classes} listFields={listFields} />
    )
}

export default Employees