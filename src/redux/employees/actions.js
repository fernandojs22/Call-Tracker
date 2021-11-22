import axios from 'axios'
import { types } from './types'
// import { AUTHORIZATION_BEARER } from '../constants/'
import { employeesQuery } from '../../graphQL/querys/employees'

const databaseAPI = process.env.REACT_APP_DATASTORE_API_URL
const graphqlAPI = process.env.REACT_APP_DATABASE_API_URL
const employeesRoute = process.env.REACT_APP_API_EMPLOYEES_ROUTE

const AUTHORIZATION_BEARER = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
}

export const fetchEmployees = (onError) => {

    return async (dispatch) => {
        try {
            dispatch({ type: types.FETCH_EMPLOYEES_REQUEST })
            // await axios.get(`${databaseAPI}${employeesRoute}`, { headers: AUTHORIZATION_BEARER } )
            await axios({
                url: graphqlAPI,
                method: 'post',
                data: {
                    query: employeesQuery
                },
                headers: AUTHORIZATION_BEARER
            })
                .then(responde => {
                    console.log(responde.data.data.employees)
                    dispatch({
                        type: types.FETCH_EMPLOYEES_SUCCESS,
                        // payload: { data: responde.data }
                        payload: { data: responde.data.data.employees }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: types.FETCH_EMPLOYEES_FAILURE,
                        payload: { error: error }
                    })
                    onError(error)
                })
        } catch (error) {
            dispatch({
                type: types.FETCH_EMPLOYEES_FAILURE,
                payload: { error: error }
            })
            onError(error)
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

    return async (dispatch) => {
        try {
            dispatch({ type: types.PUT_EMPLOYEE_REQUEST })
            await axios.put(`${databaseAPI}${employeesRoute}`, employee, { params: { _id: employee._id }, headers: AUTHORIZATION_BEARER})
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
    
    const { _id, ...data } = employee
    data.id = 999

    return async (dispatch) => {
        try {
            dispatch({ type: types.POST_EMPLOYEE_REQUEST })
            await axios.post(`${databaseAPI}${employeesRoute}`, data, { params: { _id: employee._id }, headers: AUTHORIZATION_BEARER})
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
    
    return async (dispatch) => {
        try {
            dispatch({ type: types.DELETE_EMPLOYEE_REQUEST })
            await axios.delete(`${databaseAPI}${employeesRoute}`, { params: { _id: employee._id }, headers: AUTHORIZATION_BEARER})
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