import { TYPES } from '../types'

const initState = {
    loading: false,
    id_token: null,
    authenticated: false,
    user: null,
    error: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case TYPES.STATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TYPES.SET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                // id_token: action.payload.token,
                // authenticated: true,
                user: action.payload.data
            }
        case TYPES.SET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                user: null
            }
        case TYPES.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                id_token: action.payload.token,
                authenticated: action.payload.isAuthenticated,
            }
        case TYPES.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                id_token: null,
                authenticated: false,
            }
            case TYPES.LOGOUT_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case TYPES.LOGOUT_SUCCESS:
                return initState
            case TYPES.LOGOUT_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                }
        default:
            return state;
    }
}

export default userReducer