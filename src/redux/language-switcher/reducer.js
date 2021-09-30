import { types } from './types'
import config, { getCurrentLanguage } from './config'

const initState = {
    isActivated: false,
    language: getCurrentLanguage(config.defaultLanguage)[0],
    error: ``
}

const languageSwitcherReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ACTIVATE_LANG_MODAL_SUCCESS:
            return {
                ...state,
                isActivated: !state.isActivated
            }
        case types.ACTIVATE_LANG_MODAL_FAILURE:
            return {
                ...state,
                isActivated: false,
                error: action.payload.error
            }
        case types.CHANGE_LANGUAGE_SUCCESS:
            return {
                ...state,
                language: action.payload.data
            }
        case types.CHANGE_LANGUAGE_FAILURE:
            return {
                ...state,
                language: getCurrentLanguage(config.defaultLanguage || 'english')[0],
                error: action.payload.error
            }
        default:
            return state
    }
}

export default languageSwitcherReducer