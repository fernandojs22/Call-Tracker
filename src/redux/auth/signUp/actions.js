import axios from 'axios'
import { TYPES } from '../types'

const authenticationAPI = process.env.REACT_APP_AUTH_API_URL
const registerRoute = process.env.REACT_APP_API_REGISTER_ROUTE

export const signUpLocalAction = (user, onSuccess, onError) => {
    return async function(dispatch) {
        try {
            dispatch({ type: TYPES.REGISTER_REQUEST })
            await axios.post(`${authenticationAPI}${registerRoute}`,user)
            .then(response => {
                dispatch({
                    type: TYPES.REGISTER_SUCCESS,
                    payload: response.data
                })
                onSuccess()
            })
            .catch(error => {
                dispatch({
                    type: TYPES.REGISTER_FAILURE,
                    payload: { error: error }
                })
                onError(error)
            })
        } catch (error) {
            dispatch({
                type: TYPES.REGISTER_FAILURE,
                payload: { error: error }
            })
            onError(error)
        }
    }
}