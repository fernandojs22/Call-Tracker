import { DASHBOARD as mod2 } from '../../constants/paths'
import DashboardPage from '../Dashboard/pages/Dashboard'
import enhance from './enhance'

const DashboardRoute = {
    path: mod2.PATH,
    component:  enhance(DashboardPage)
}

export default DashboardRoute