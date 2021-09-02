import { useState } from 'react'

import {
    Button
} from '@material-ui/core'

import { useStyles } from '../../../assets/stytes/globalStyle'

import { sessions } from '../models/employeesSessions'
import EmployeesList from './EmployeesList'
import EmployeeCard from './EmployeeCard'

const Employees = () => {
    
    const classes = useStyles()
    const sessionList = Object.keys(sessions)
    const listFields = []

    const handleBtn = () => {
        if (listFlag) {
            setListFlag(false)
        } else {
            setListFlag(true)
        }
    }

    sessionList.map((session) => {
        return sessions[`${session}`].map((field) => {
            if (field['listResultId']) {
                listFields.push(field)
            }
            return true
        })
    })

    const [listFlag, setListFlag] = useState(false)

    return (
        <div>
            <Button
                onClick={handleBtn}
            >
                Switch
            </Button>
            {
                listFlag
                    ? <EmployeeCard classes={classes} sessionList={sessionList} />
                    : <EmployeesList classes={classes} listFields={listFields} />
            }
        </div>
    )
}

export default Employees