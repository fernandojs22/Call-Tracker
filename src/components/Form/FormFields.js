import {
    Typography,
    TextField
} from '@material-ui/core'

const FormFields = ({ classes, sessions, session }) => {
    return (
        <Typography component="span" variant="body2">
            {
                sessions[`${session}`].map((field) => (

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
                    />
                ))
            }
        </Typography>
    )
}

export default FormFields