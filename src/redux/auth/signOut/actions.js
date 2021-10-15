import { TYPES } from '../types'

const authenticationAPI = process.env.REACT_APP_AUTH_API_URL
const logoutRoute = process.env.REACT_APP_API_LOGOUT_ROUTE

export const signOutAction = (done) => {
    return async function (dispatch) {
        try {
            dispatch({ type: TYPES.LOGOUT_REQUEST })
            await fetch(`${authenticationAPI}${logoutRoute}`)
                .then(() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('persist:root')
                    dispatch({
                        type: TYPES.LOGOUT_SUCCESS
                    })
                    done()
                })
                .catch(error => {
                    dispatch({
                        type: TYPES.LOGOUT_FAILURE,
                        payload: { error: error }
                    })
                })
        } catch (error) {
            dispatch({
                type: TYPES.LOGOUT_FAILURE,
                payload: { error: error }
            })
        }
    }
}