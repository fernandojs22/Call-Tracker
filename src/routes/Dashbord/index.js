import { DASHBOARD as module } from '../../constants/modules'
import { loadable } from '../../utils/router'

const DashboardRoute = {
    path: module.path,
    component: loadable(() => import(module.PAGE))
}

export default DashboardRoute