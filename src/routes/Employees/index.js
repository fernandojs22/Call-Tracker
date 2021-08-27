import { EMPLOYEES as module } from '../../constants/modules'
import { loadable } from '../../utils/router'

const EmployeesRoute = {
    path: module.path,
    component: loadable(() => import(module.PAGE))
}

export default EmployeesRoute