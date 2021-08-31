import {
    Typography,
    TextField
} from '@material-ui/core'

const FormFields = ({ classes, sessions, session }) => {
    return (
        <div>
            {
                sessions[`${session}`].map((field) => (
                    <Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label={field.label}
                            multiline={field.multiline}
                            minRows={6}
                            required={field.required}
                            className={classes.field}
                            id={field.field}
                            name={field.field}
                        />

                    </Typography>
                ))
            }
        </div>
    )
}

export default FormFields