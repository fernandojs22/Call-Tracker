import axios from 'axios'
import { TYPES } from '../types'
const fakeAPI = process.env.REACT_APP_FAKE_API_URL

export const setUserAction = (id) => {
    return async function(dispatch) {
        try {
            dispatch({ type: TYPES.STATE_REQUEST })
            axios.get(`${fakeAPI}/users/${id}`)
            .then(response => {
                dispatch({
                    type: TYPES.SET_USER_SUCCESS,
                    payload: { data: response.data }
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