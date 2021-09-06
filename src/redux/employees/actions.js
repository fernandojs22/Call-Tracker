import axios from 'axios'
import { types } from './types'

const fakeAPI = process.env.REACT_APP_FAKE_API_URL

export const fetchEmployees = () => {

    return async (dispatch) => {
        try {
            dispatch({ type: types.FETCH_EMPLOYEES_REQUEST })
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

export const getEmployee = employee => {
    return (dispatch) => {
        dispatch({ type: types.GET_EMPLOYEE_REQUEST })
        try {
            dispatch({
                type: types.GET_EMPLOYEE_SUCCESS,
                payload: { data: employee }
            })
        } catch (error) {
            dispatch({
                type: types.GET_EMPLOYEE_FAILURE,
                error: { error: error }
            })
        }
    }
}

export const setEmployee = (employee) => {
    return (dispatch) => {
        dispatch({ type: types.SET_EMPLOYEE_REQUEST })
        try {
            dispatch({
                type: types.SET_EMPLOYEE_SUCCESS,
                payload: { data: employee }
            })
        } catch (error) {
            dispatch({
                type: types.SET_EMPLOYEE_FAILURE,
                error: { error: error }
            })
        }
    }
}

export const putEmployee = employee => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.PUT_EMPLOYEE_REQUEST })
            axios.put(`${fakeAPI}/employees/${employee.id}`, employee)
                .then(data => {
                    dispatch({
                        type: types.PUT_EMPLOYEE_SUCCESS,
                        payload: { data: data }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: types.PUT_EMPLOYEE_FAILURE,
                        payload: { error: error }
                    })
                })

        } catch (error) {
            dispatch({
                type: types.PUT_EMPLOYEE_FAILURE,
                payload: { error: error }
            })
        }
    }
}

export const postEmployee = employee => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.POST_EMPLOYEE_REQUEST })
            axios.post(`${fakeAPI}/employees`, employee)
                .then(data => {
                    dispatch({
                        type: types.POST_EMPLOYEE_SUCCESS,
                        payload: { data: data }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: types.POST_EMPLOYEE_FAILURE,
                        payload: { error: error }
                    })
                })

        } catch (error) {
            dispatch({
                type: types.POST_EMPLOYEE_FAILURE,
                payload: { error: error }
            })
        }
    }
}