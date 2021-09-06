import { types } from './types'

const initState = {
    loading: false,
    employees: [],
    employees2: [],
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
        default:
            return state
    }
}

export default employeesReducer