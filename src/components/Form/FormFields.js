import { useState } from 'react'

import {
    Typography,
    TextField
} from '@material-ui/core'

import { useDispatch } from 'react-redux'

import { setEmployee } from '../../redux/employees/actions'

const FormFields = ({ classes, sessions, session, employee }) => {
    
    const dispatch = useDispatch()

    const [employeeState, setEmployeeState] = useState(employee)
    
    const handleChange = (e) => {
        setEmployeeState({ ...employeeState, [e.target.name]: e.target.value })
        dispatch(setEmployee({ ...employeeState, [e.target.name]: e.target.value }))
    }

    return (
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
    )
}

export default FormFields