import {
    Dashboard as DashboardIcon,
    Call as CallIcon,
    Work as WorkIcon,
    ContactPhone as ContactPhoneIcon,
    PowerSettingsNew as PowerSettingsNewIcon
} from '@material-ui/icons'

import { DASHBOARD, CALLS, CUSTOMERS, EMPLOYEES, SIGNIN } from './paths'

export const options = [
    {
        path: DASHBOARD.PATH,
        text: 'Dashboard',
        icon: <DashboardIcon />
    },
    {
        path: CALLS.PATH,
        text: 'Calls',
        icon: <CallIcon />
    },

    {
        path: CUSTOMERS.PATH,
        text: 'Customers',
        icon: <ContactPhoneIcon />
    },
    {
        path: EMPLOYEES.PATH,
        text: 'Employees',
        icon: <WorkIcon />
    },
    {
        path: SIGNIN.PATH,
        text: 'Logout',
        icon: <PowerSettingsNewIcon />
    },
]