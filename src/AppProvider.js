import React from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

import AppLocale from './config/translation'

function AppProvider({ children }) {

    const { locale } = useSelector(state => state.LanguageSwitcher.language)
    const currentAppLocale = AppLocale[locale]

    return (
        <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
        >
            {children}
        </IntlProvider>
    )
}

export default AppProvider
