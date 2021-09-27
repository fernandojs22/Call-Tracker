import axios from 'axios'
import { types } from './types'

// const fakeAPI = process.env.REACT_APP_FAKE_API_URL
const databaseAPI = process.env.REACT_APP_FAKE_AUTH_API_URL

export const fetchEmployees = () => {
    
    const token = localStorage.getItem('token')

    return async (dispatch) => {
        try {
            dispatch({ type: types.FETCH_EMPLOYEES_REQUEST })
            await axios.get(`${databaseAPI}/employees`, { headers: {'Authorization': `Bearer ${token}` }} )
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

export const putEmployee = (employee, onSuccess, onError) => {
    
    const token = localStorage.getItem('token')

    return async (dispatch) => {
        try {
            dispatch({ type: types.PUT_EMPLOYEE_REQUEST })
            axios.put(`${databaseAPI}/employees`, employee, { params: { _id: employee._id }, headers: {'Authorization': `Bearer ${token}` }})
                .then(data => {
                    dispatch({
                        type: types.PUT_EMPLOYEE_SUCCESS,
                        payload: { data: data }
                    })
                    onSuccess()
                })
                .catch(error => {
                    dispatch({
                        type: types.PUT_EMPLOYEE_FAILURE,
                        payload: { error: error }
                    })
                    onError()
                })

        } catch (error) {
            dispatch({
                type: types.PUT_EMPLOYEE_FAILURE,
                payload: { error: error }
            })
            onError()
        }
    }
}

export const postEmployee = (employee, onSuccess, onError)  => {
    
    const token = localStorage.getItem('token')

    const { _id, ...data } = employee
    data.id = 999

    return async (dispatch) => {
        try {
            dispatch({ type: types.POST_EMPLOYEE_REQUEST })
            axios.post(`${databaseAPI}/employees`, data, { params: { _id: employee._id }, headers: {'Authorization': `Bearer ${token}` }})
                .then(data => {
                    dispatch({
                        type: types.POST_EMPLOYEE_SUCCESS,
                        payload: { data: data }
                    })
                    onSuccess()
                })
                .catch(error => {
                    dispatch({
                        type: types.POST_EMPLOYEE_FAILURE,
                        payload: { error: error }
                    })
                    onError()
                })

        } catch (error) {
            dispatch({
                type: types.POST_EMPLOYEE_FAILURE,
                payload: { error: error }
            })
            onError()
        }
    }
}

export const deleteEmployee = (employee, onSuccess, onError) => {
    
    const token = localStorage.getItem('token')

    return async (dispatch) => {
        try {
            dispatch({ type: types.DELETE_EMPLOYEE_REQUEST })
            axios.delete(`${databaseAPI}/employees`, { params: { _id: employee._id }, headers: {'Authorization': `Bearer ${token}` }})
                .then(data => {
                    dispatch({
                        type: types.DELETE_EMPLOYEE_SUCCESS,
                        payload: { data: data }
                    })
                    onSuccess()
                })
                .catch(error => {
                    dispatch({
                        type: types.DELETE_EMPLOYEE_FAILURE,
                        payload: { error: error }
                    })
                    onError()
                })

        } catch (error) {
            dispatch({
                type: types.DELETE_EMPLOYEE_FAILURE,
                payload: { error: error }
            })
            onError()
        }
    }
}