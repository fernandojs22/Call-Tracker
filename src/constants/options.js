import {
    Dashboard as DashboardIcon,
    Call as CallIcon,
    Work as WorkIcon,
    ContactPhone as ContactPhoneIcon,
    Settings as SettingsIcon
} from '@material-ui/icons'

import { DASHBOARD, CALLS, CUSTOMERS, EMPLOYEES, SETTINGS } from './paths'
import {  roles } from './roles'

import IntlMessages from '../components/Utils/IntlMessages'

export const options = [
    {
        path: DASHBOARD.PATH,
        text: <IntlMessages id="navbar.dashboard" />,
        icon: <DashboardIcon />,
        allowedRoles: [roles.ROLE_USER,roles.ROLE_ADMIN]
    },
    {
        path: CALLS.PATH,
        text: <IntlMessages id="navbar.calls" />,
        icon: <CallIcon />,
        allowedRoles: [roles.ROLE_USER,roles.ROLE_ADMIN]
    },

    {
        path: CUSTOMERS.PATH,
        text: <IntlMessages id="navbar.customers" />,
        icon: <ContactPhoneIcon />,
        allowedRoles: [roles.ROLE_USER,roles.ROLE_ADMIN]
    },
    {
        path: EMPLOYEES.PATH,
        text: <IntlMessages id="navbar.employees" />,
        icon: <WorkIcon />,
        allowedRoles: [roles.ROLE_ADMIN]
    },
    {
        path: SETTINGS.PATH,
        text: <IntlMessages id="navbar.settings" />,
        icon: <SettingsIcon />,
        allowedRoles: [roles.ROLE_USER,roles.ROLE_ADMIN]
    }
]