import axios from 'axios'
import { TYPES } from '../types'
const authenticationAPI = process.env.REACT_APP_FAKE_AUTH_API_URL

export const signUpLocalAction = (user, onSuccess, onError) => {
    return async function(dispatch) {
        try {
            dispatch({ type: TYPES.REGISTER_REQUEST })
            axios.post(`${authenticationAPI}/register`,user)
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