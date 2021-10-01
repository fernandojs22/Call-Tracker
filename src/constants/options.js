import {
    Dashboard as DashboardIcon,
    Call as CallIcon,
    Work as WorkIcon,
    ContactPhone as ContactPhoneIcon,
    Settings as SettingsIcon
} from '@material-ui/icons'

import { DASHBOARD, CALLS, CUSTOMERS, EMPLOYEES, SETTINGS } from './paths'

import IntlMessages from '../components/Utils/IntlMessages'

export const options = [
    {
        path: DASHBOARD.PATH,
        text: <IntlMessages id="navbar.dashboard" />,
        icon: <DashboardIcon />
    },
    {
        path: CALLS.PATH,
        text: <IntlMessages id="navbar.calls" />,
        icon: <CallIcon />
    },

    {
        path: CUSTOMERS.PATH,
        text: <IntlMessages id="navbar.customers" />,
        icon: <ContactPhoneIcon />
    },
    {
        path: EMPLOYEES.PATH,
        text: <IntlMessages id="navbar.employees" />,
        icon: <WorkIcon />
    },
    {
        path: SETTINGS.PATH,
        text: <IntlMessages id="navbar.settings" />,
        icon: <SettingsIcon />
    }
]