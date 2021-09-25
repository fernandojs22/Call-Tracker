import axios from 'axios'
import { TYPES } from '../types'
import { setUserAction } from '../user/actions'
const authenticationAPI = process.env.REACT_APP_FAKE_AUTH_API_URL

export const signInLocalAction = (email ,password, onSuccess, onError) => {
    return async function(dispatch) {
        try {
            dispatch({ type: TYPES.LOGIN_REQUEST })
            axios.post(`${authenticationAPI}/login/local`,{
                email,
                password
            })
            .then(response => {
                dispatch({
                    type: TYPES.LOGIN_SUCCESS,
                    payload: response.data
                })
                dispatch(setUserAction(response.data.token))
                onSuccess()
            })
            .catch(error => {
                dispatch({
                    type: TYPES.LOGIN_FAILURE,
                    payload: { error: error }
                })
                onError(error)
            })
        } catch (error) {
            dispatch({
                type: TYPES.LOGIN_FAILURE,
                payload: { error: error }
            })
            onError(error)
        }
    }
}