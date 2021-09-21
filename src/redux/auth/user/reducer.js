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
                id_token: action.payload.token,
                authenticated: true,
                user: action.payload.data
            }
            case TYPES.SET_USER_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                    user: null
                }
        default:
            return state;
    }
}

export default userReducer