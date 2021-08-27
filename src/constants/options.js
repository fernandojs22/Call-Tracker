import {
    Dashboard as DashboardIcon,
    Call as CallIcon,
    Work as WorkIcon,
    ContactPhone as ContactPhoneIcon
} from '@material-ui/icons'

import { DASHBOARD, CALLS, CUSTOMERS, EMPLOYEES } from './paths'

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
        icon: <WorkIcon />
    },
    {
        path: EMPLOYEES.PATH,
        text: 'Employees',
        icon: <ContactPhoneIcon />
    },
]