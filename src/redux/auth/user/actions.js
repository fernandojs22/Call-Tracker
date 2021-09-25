import axios from 'axios'
import { TYPES } from '../types'
// const fakeAPI = process.env.REACT_APP_FAKE_API_URL
const authenticationAPI = process.env.REACT_APP_FAKE_AUTH_API_URL

export const setUserAction = (token) => {
    return async function(dispatch) {
        try {
            dispatch({ type: TYPES.STATE_REQUEST })
            axios.get(`${authenticationAPI}/profile`,{params:{secret_token:token}})
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