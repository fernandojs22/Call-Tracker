import axios from 'axios'

import { TYPES } from '../types'
import { AUTHORIZATION_BEARER } from '../../constants'

const databaseAPI = process.env.REACT_APP_DATASTORE_API_URL
const authenticationAPI = process.env.REACT_APP_AUTH_API_URL

const profileRoute = process.env.REACT_APP_API_PROFILE_ROUTE
const changePasswordRoute = process.env.REACT_APP_API_CHANGE_PASSWORD_ROUTE

export const setUserAction = (bearerToken) => {
    return async function (dispatch) {
        try {
            dispatch({ type: TYPES.STATE_REQUEST })
            await axios.get(`${databaseAPI}${profileRoute}`, { headers: {Authorization: bearerToken} } )
                .then(response => {
                    dispatch({
                        type: TYPES.SET_USER_SUCCESS,
                        payload: { data: response.data.user }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: TYPES.SET_USER_FAILURE,
                        payload: { error: error }
                    })
                })
        } catch (error) {
            dispatch({
                type: TYPES.SET_USER_FAILURE,
                payload: { error: error }
            })
        }
    }
}

export const putUser = (user, onSuccess, onError) => {

    return async (dispatch) => {
        try {
            dispatch({ type: TYPES.PUT_USER_REQUEST })
            await axios.put(`${databaseAPI}${profileRoute}`, user, { headers: AUTHORIZATION_BEARER })
                .then(data => {
                    dispatch({
                        type: TYPES.PUT_USER_SUCCESS,
                        payload: { data: data }
                    })
                    dispatch(setUserAction(AUTHORIZATION_BEARER.Authorization))
                    onSuccess()
                })
                .catch(error => {
                    dispatch({
                        type: TYPES.PUT_USER_FAILURE,
                        payload: { error: error }
                    })
                    onError(error)
                })

        } catch (error) {
            dispatch({
                type: TYPES.PUT_USER_FAILURE,
                payload: { error: error }
            })
            onError(error)
        }
    }
}

export const changePasswordAction = (passwords, onSuccess, onError) => {

    const { newPassword, verifyNewPassword } = passwords

    return async (dispatch) => {
        try {
            if (newPassword !== verifyNewPassword) throw new Error('Passwords are not same')
            dispatch({ type: TYPES.CHANGE_PASSWORD_REQUEST })
            await axios.put(`${authenticationAPI}${changePasswordRoute}`, passwords, { headers: AUTHORIZATION_BEARER })
                .then(() => {
                    onSuccess()
                })
                .catch(error => {
                    onError(error)
                })

        } catch (error) {
            onError(error)
        }
    }
}