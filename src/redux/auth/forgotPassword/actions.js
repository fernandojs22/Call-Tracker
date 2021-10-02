import axios from 'axios'
import { TYPES } from '../types'
const authenticationAPI = process.env.REACT_APP_AUTH_API_URL

export const forgotPasswordAction = (email, onSuccess, onError) => {

    return async function (dispatch) {
        try {
            await axios.post(`${authenticationAPI}/reset`, {}, { params: { email }})
                .then(response => {
                    dispatch({
                        type: TYPES.FORGOT_PASSWORD_SUCCESS
                    })
                    onSuccess()
                })
                .catch(error => {
                    dispatch({
                        type: TYPES.FORGOT_PASSWORD_FAILURE,
                        payload: { error: error }
                    })
                    onError(error)
                })
        } catch (error) {
            dispatch({
                type: TYPES.FORGOT_PASSWORD_FAILURE,
                payload: { error: error }
            })
            onError(error)
        }
    }
}