import React, { useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import {
    Grid,
    Typography,
    TextField,
    Button,
    Box,
    FormControlLabel,
    FormControl,
    Radio,
    RadioGroup,
    Divider
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon
} from '@material-ui/icons'

import { forgotPasswordAction } from '../../../../redux/auth/forgotPassword/actions'

import { useStyles } from '../../../../assets/stytes/globalStyle'

import IntlMessages from '../../../../components/Utils/IntlMessages'

const ForgotPassword = () => {

    const classes = useStyles()

    const dispatch = useDispatch()

    const history = useHistory()

    const [loginForm, setLoginForm] = useState({
        email: ""
    })

    const [loginFormError, setLoginFormError] = useState({
        email: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const flag = Object.values(loginFormError).find(e => e === true)

        if (flag) {
            alert('A field is empy')
        } else {
            dispatch(forgotPasswordAction
                (
                    loginForm.email,
                    () => {
                        alert("Email was sent")
                        history.push('/')
                    },
                    (error) => {
                        alert(error)
                    },
                ))
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setLoginForm({ ...loginForm, [name]: value })

        if (value === "") {
            setLoginFormError({ ...loginFormError, [name]: true })
        } else {
            setLoginFormError({ ...loginFormError, [name]: false })
        }
    }

    return (
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <Grid item xs={12} justifyContent="center">
                <Box>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        component="h2"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="forgot.password.forgot-password" />
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="forgot.password.how-would-you-like-to-reset-your-password" />
                    </Typography>
                    <Typography align="center">
                        <FormControl component="fieldset">
                            <RadioGroup
                                defaultValue="email"
                                name="reset-pwd-methods"
                            >
                                <FormControlLabel value="email" control={<Radio />} label={<IntlMessages id="generic.email" />} />
                                <FormControlLabel value="sms" control={<Radio />} label={<IntlMessages id="forgot.password.text-message-sms" />} />
                            </RadioGroup>
                        </FormControl>
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="forgot.password.we-will-send-you-an-email-with-instructions-on-how-to-reset-your-password" />
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            label={<IntlMessages id="generic.email" />}
                            type="email"
                            name="email"
                            value={loginForm.email}
                            onChange={(e) => handleChange(e)}
                            className={classes.textField}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                            error={loginFormError.email}
                        />
                        <Divider />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}
                            fullWidth
                        >
                            <IntlMessages id="forgot.password.send-me" />
                        </Button>
                        <Typography
                            gutterBottom
                            align="center"
                        >
                            <Link to="/signup"> <IntlMessages id="forgot.password.i-dont-remember-my-email-or-phone" /> </Link>
                        </Typography>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}



export default ForgotPassword