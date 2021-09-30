import language from '../../config/laguage.config'

import {
    IconFlagES as esLang,
    IconFlagUS as enLang
} from 'material-ui-flags';

const config = {
    defaultLanguage: language,
    options: [
        {
            languageId: 'english',
            locale: 'en',
            text: 'English',
            icon: enLang
        },
        {
            languageId: 'spanish',
            locale: 'es',
            text: 'Spanish',
            icon: esLang
        }
    ]
}

export function getCurrentLanguage(lang) {
    return config.options.filter(language => language.languageId === lang)
}

export default config