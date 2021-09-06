import { types } from './types'

const initState = {
    loading: false,
    employees: [],
    employees2: [],
    employee: {},
    error: ``
}

const employeesReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.payload.data,
                employees2: action.payload.data,
                error: ``
            }
        case types.FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                employees: [],
                error: action.payload.error
            }
        case types.GET_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload.data,
                error: ``
            }
        case types.GET_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                employee: {},
                error: action.payload.error
            }
        case types.SET_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.SET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload.data,
                error: ``
            }
        case types.SET_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                employee: {},
                error: action.payload.error
            }
        case types.POST_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.POST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload.data,
                error: ``
            }
        case types.POST_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                employee: {},
                error: action.payload.error
            }
        case types.PUT_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.PUT_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload.data,
                error: ``
            }
        case types.PUT_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                employee: {},
                error: action.payload.error
            }
        default:
            return state
    }
}

export default employeesReducer