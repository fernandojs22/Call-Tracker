import axios from 'axios'
import { TYPES } from '../types'
import { setUserAction } from '../user/actions'

const authenticationAPI = process.env.REACT_APP_AUTH_API_URL
const loginLocalRoute = process.env.REACT_APP_API_LOGIN_LOCAL_ROUTE

export const setRememberMeAction = (past, rememberMe, email) => {
    return async function (dispatch) {
        try {
            if (past !== rememberMe) {
                if (rememberMe) {
                    dispatch({
                        type: TYPES.SET_REMEMBER_ME_SUCCESS,
                        payload: { data: { email: email, rememberMe: true } }
                    })
                    localStorage.setItem('email', email)
                } else {
                    dispatch({
                        type: TYPES.SET_REMEMBER_ME_SUCCESS,
                        payload: { data: { email: null, rememberMe: false } }
                    })
                    localStorage.removeItem('email')
                }
            }
        } catch (error) {
            dispatch({
                type: TYPES.SET_REMEMBER_ME_FAILURE,
                payload: { error: error }
            })
        }
    }
}

export const signInLocalAction = (user, onSuccess, onError) => {

    const rememberMe = localStorage.getItem('email') ? true : false

    return async function (dispatch) {
        try {
            dispatch({ type: TYPES.LOGIN_REQUEST })
            await axios.post(`${authenticationAPI}${loginLocalRoute}`, {
                email: user.email,
                password: user.password
            })
                .then(async response => {
                    dispatch({
                        type: TYPES.LOGIN_SUCCESS,
                        payload: response.data
                    })
                    localStorage.setItem('token', response.data.token)
                    
                    dispatch(setUserAction(`Bearer ${response.data.token}`))
                    onSuccess()
                })
                .catch(error => {
                    dispatch({
                        type: TYPES.LOGIN_FAILURE,
                        payload: { error: error }
                    })
                    onError(error)
                })
            dispatch(setRememberMeAction(rememberMe, user.rememberMe, user.email))
        } catch (error) {
            dispatch({
                type: TYPES.LOGIN_FAILURE,
                payload: { error: error }
            })
            onError(error)
        }
    }
}

export const getRememberMeAction = (onSuccess, onSuccess2) => {
    return function (dispatch) {
        try {
            const email = localStorage.getItem('email')
            if (email) {
                dispatch({
                    type: TYPES.GET_REMEMBER_ME_SUCCESS,
                    payload: { data: { email: email, rememberMe: true } }
                })
                onSuccess({
                    email: email,
                    rememberMe: true
                })
                onSuccess2({
                    email: false,
                    rememberMe: false
                })
            } else {
                dispatch({
                    type: TYPES.GET_REMEMBER_ME_SUCCESS,
                    payload: { data: { email: null, rememberMe: false } }
                })
                onSuccess({
                    email: null,
                    rememberMe: false
                })
                onSuccess2({
                    email: false,
                    rememberMe: false
                })
            }

        } catch (error) {
            dispatch({
                type: TYPES.GET_REMEMBER_ME_FAILURE,
                payload: { error: error }
            })
        }
    }
}