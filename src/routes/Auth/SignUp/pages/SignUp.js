import React, { useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import {
    Grid,
    Typography,
    TextField,
    Checkbox,
    Button,
    Box,
    InputAdornment,
    IconButton,
    FormControlLabel
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons'

import { signUpLocalAction } from '../../../../redux/auth/signUp/actions'

import { useStyles } from '../../../../assets/stytes/globalStyle'

import IntlMessages from '../../../../components/Utils/IntlMessages'

const SignUp = () => {

    const [visibility, setVisibility] = useState(true)

    const classes = useStyles()

    const dispatch = useDispatch()

    const history = useHistory()

    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agree: false
    })

    const [registerFormError, setRegisterFormError] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        agree: true
    })

    const handleSubmit = (e) => {

        e.preventDefault()

        const flag = Object.values(registerFormError).find(e => e === true)

        if (flag) {
            alert('A field is empy')
        } else {
            dispatch(signUpLocalAction
                (
                    registerForm,
                    () => {
                        history.push('/')
                    },
                    (error) => {
                        alert(error)
                    },
                ))
        }


    }

    const handleChange = (e, checked) => {

        const name = e.target.name
        let value

        if (checked) {
            value = !registerForm[name]
        } else 
        {
            value = e.target.value
        }

        setRegisterForm({ ...registerForm, [name]: value })

        if (value === "") {
            setRegisterFormError({ ...registerFormError, [name]: true })
        } else {
            setRegisterFormError({ ...registerFormError, [name]: false })
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
                        <IntlMessages id="register.sign-up" />
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="generic.enter-your-credentials-to-continue" />
                    </Typography>
                    <Button
                        variant="text"
                        fullWidth
                        startIcon={<KeyboardArrowRightIcon />}
                        disableElevation
                    >
                        <IntlMessages id="register.sign-up-with-google" />
                    </Button>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="generic.or" />
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="register.sign-up-email-address" />
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    label={<IntlMessages id="generic.firt-name" />}
                                    type="text"
                                    name="firstName"
                                    value={registerForm.firstName}
                                    onChange={(e) => handleChange(e)}
                                    className={classes.textField}
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                    required
                                    error={registerFormError.firstName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label={<IntlMessages id="generic.last-name" />}
                                    type="text"
                                    name="lastName"
                                    value={registerForm.lastName}
                                    onChange={(e) => handleChange(e)}
                                    className={classes.textField}
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                    required
                                    error={registerFormError.lastName}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            label={<IntlMessages id="generic.email" />}
                            type="email"
                            name="email"
                            value={registerForm.email}
                            onChange={(e) => handleChange(e)}
                            className={classes.textField}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                            error={registerFormError.email}
                        />
                        <TextField
                            label={<IntlMessages id="generic.password" />}
                            type={visibility ? "password" : "text"}
                            name="password"
                            value={registerForm.password}
                            onChange={(e) => handleChange(e)}
                            className={classes.textField}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                            error={registerFormError.password}

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton
                                            color="inherit"
                                            onClick={() => setVisibility(!visibility)}
                                        >
                                            {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Typography
                            gutterBottom
                        >
                            <FormControlLabel control={<Checkbox value={registerForm.agree} name="agree" onChange={(e) => handleChange(e, true)}/>} label={<IntlMessages id="register.agree-to-the-terms-conditions" />} />
                        </Typography>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}
                        >
                            <IntlMessages id="register.register" />
                        </Button>
                        <Typography
                            gutterBottom
                            align="center"
                        >
                            <Link to="/"> <IntlMessages id="register.dont-have-an-account?" /> </Link>
                        </Typography>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUp