import axios from 'axios'
import { types } from './types'

const fakeAPI = process.env.REACT_APP_FAKE_API_URL

export const fetchEmployees = () => {

    return async (dispatch) => {
        try {
            dispatch({type: types.FETCH_EMPLOYEES_REQUEST})
            await axios.get(`${fakeAPI}/employees`)
                .then(responde => {
                    dispatch({
                        type: types.FETCH_EMPLOYEES_SUCCESS,
                        payload: { data: responde.data }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: types.FETCH_EMPLOYEES_FAILURE,
                        payload: { error: error }
                    })
                })
        } catch (error) {
            dispatch({
                type: types.FETCH_EMPLOYEES_FAILURE,
                payload: { error: error }
            })
        }
    }
}