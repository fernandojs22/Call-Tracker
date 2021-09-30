import language from '../../config/laguage.config'

import esLang from '../../assets/images/flag/spain.svg'
import enLang from '../../assets/images/flag/us.svg'

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