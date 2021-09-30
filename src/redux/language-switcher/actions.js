import { types } from './types'
import { getCurrentLanguage } from './config'

export const switchActivation = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: types.ACTIVATE_LANG_MODAL_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: types.ACTIVATE_LANG_MODAL_FAILURE,
                error: { error: error }
            })
        }
    }
}

export const changeLanguage = language => {
    return (dispatch) => {
        try {
            dispatch({
                type: types.CHANGE_LANGUAGE_SUCCESS,
                payload: { data: getCurrentLanguage(language)[0] }
            })
        } catch (error) {
            dispatch({
                type: types.CHANGE_LANGUAGE_FAILURE,
                error: { error: error }
            })
        }
    }
}