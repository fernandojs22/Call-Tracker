import { CUSTOMERS as module } from '../../constants/modules'
import { loadable } from '../../utils/router'

const CustomersRoute = {
    path: module.path,
    component: loadable(() => import(module.PAGE))
}

export default CustomersRoute