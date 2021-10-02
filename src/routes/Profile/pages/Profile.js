import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import {
    Container,
    Button,
    Grid,
    Divider,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField,
    InputAdornment,
    IconButton
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon,
    Cancel as CancelIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons'

import { putUser, changePasswordAction } from '../../../redux/auth/user/actions'
import { sessions } from '../models/profile.model'

import AvatarShortBox from '../../../components/Avatar/AvatarShortBox'

import IntlMessages from '../../../components/Utils/IntlMessages'

import { useStyles } from '../../../assets/stytes/globalStyle'

const avatar = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

const Profile = () => {

    const classes = useStyles()

    const { user } = useSelector(state => state.User)

    const [visibility, setVisibility] = useState(true)

    const [userState, setUserState] = useState(user)

    const [changePassword, setChangePassword] = useState({
        _id: user._id,
        password: '',
        newPassword: '',
        verifyNewPassword: ''
    })

    const [changePasswordError, setChangePasswordError] = useState({
        password: true,
        newPassword: true,
        verifyNewPassword: true
    })


    const handleChange = (e) => {
        setUserState(prevState => { return { ...prevState, [e.target.name]: e.target.value } })

        if (e.target.value === "") {
            setChangePasswordError(prevState => { return { ...prevState, [e.target.name]: true } })
        } else {
            setChangePasswordError(prevState => { return { ...prevState, [e.target.name]: false } })
        }

    }

    const dispatch = useDispatch()
    const history = useHistory()

    const sessionList = Object.keys(sessions)

    const handleSubmit = (e) => {
        e.preventDefault()

        const flag = Object.values(changePasswordError).find(e => e === true)

        if (buttonName === 'update') {
            dispatch(putUser(
                userState,
                () => {
                    history.push('/')
                },
                (err) => {
                    alert(err)

                }
            ))
        } else if (buttonName === 'changepassword' && !flag) {
            dispatch(changePasswordAction(
                changePassword,
                () => {
                    history.push('/')
                },
                (err) => {
                    alert(err)

                }
            ))
        }else if (buttonName === 'changepassword' && flag) {
            alert('A field is empy')
        }
    }

    const [buttonName, setButtonName] = useState('')

    const Sessions = () => {
        return (
            <>
                <Grid item lg={sessionList.length % 2 === 0 ? 12 : 6}>
                    <AvatarShortBox user={avatar} classes={classes} />

                </Grid>
                {sessionList.map((session) => {
                    if (session !== 'avatar') {
                        return (
                            <Grid item lg={6} key={session}>
                                <Card elevation={1} className={classes.sessionCard}>
                                    <CardHeader
                                        avatar={
                                            <Avatar>
                                                {`${session}`[0].toUpperCase()}
                                            </Avatar>
                                        }
                                        title={<IntlMessages id={`user.session-${session}`} />}
                                        subheader={<IntlMessages id="generic.the-information-can-be-edited" />}
                                    />
                                    <CardContent>
                                        <Typography component="span" variant="body2">
                                            {
                                                sessions[`${session}`].map((field) => {
                                                    if (field.display) {
                                                        return (
                                                            <TextField
                                                                key={field.field}
                                                                variant="outlined"
                                                                fullWidth
                                                                label={<IntlMessages id={field.label} />}
                                                                multiline={field.multiline}
                                                                minRows={6}
                                                                required={field.required}
                                                                className={classes.field}
                                                                id={field.field}
                                                                name={field.field}
                                                                value={userState[field.field]}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        )
                                                    } else {
                                                        return <></>
                                                    }
                                                })
                                            }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    } else {
                        return <div></div>
                    }
                })}
            </>
        )
    }

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={2}
                >
                    {Sessions()}
                    <Grid item lg={6} key="changePassword">
                        <Card elevation={1} className={classes.sessionCard}>
                            <CardHeader
                                avatar={
                                    <Avatar>
                                        C
                                    </Avatar>
                                }
                                title={<IntlMessages id={`user.session-change-password`} />}
                                subheader={<IntlMessages id="generic.the-information-can-be-edited" />}
                            />
                            <CardContent>
                                <Typography component="span" variant="body2">
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        label={<IntlMessages id="user.password" />}
                                        required
                                        className={classes.field}
                                        name="password"
                                        value={changePassword.password}
                                        onChange={(e) => setChangePassword(prevState => { return { ...prevState, [e.target.name]: e.target.value } })}
                                        error={changePasswordError.password}
                                    />
                                </Typography>
                                <Typography component="span" variant="body2">
                                    <TextField
                                        variant="outlined"
                                        type={visibility ? "password" : "text"}
                                        fullWidth
                                        label={<IntlMessages id="user.new-password" />}
                                        required
                                        className={classes.field}
                                        name="newPassword"
                                        value={changePassword.newPassword}
                                        onChange={(e) => setChangePassword(prevState => { return { ...prevState, [e.target.name]: e.target.value } })}
                                        error={changePasswordError.newPassword}
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
                                </Typography>
                                <Typography component="span" variant="body2">
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        label={<IntlMessages id="user.verify-new-password" />}
                                        required
                                        className={classes.field}
                                        name="verifyNewPassword"
                                        value={changePassword.verifyNewPassword}
                                        onChange={(e) => setChangePassword(prevState => { return { ...prevState, [e.target.name]: e.target.value } })}
                                        error={changePasswordError.verifyNewPassword}
                                        
                                    />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container>
                    <Grid item lg={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            className={classes.submitBtn}
                            endIcon={<KeyboardArrowRightIcon />}
                            onClick={() => setButtonName('update')}
                        >
                            <IntlMessages id="buttons.update" />
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.submitBtn}
                            endIcon={<CancelIcon />}
                            id="cancel"
                        >
                            <IntlMessages id="buttons.cancel" />
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            color="inherit"
                            className={classes.submitBtn}
                            endIcon={<KeyboardArrowRightIcon />}
                            onClick={() => setButtonName('changepassword')}
                        >
                            <IntlMessages id="buttons.change-password" />
                        </Button>

                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Profile