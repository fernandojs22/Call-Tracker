import { CALLS as module } from '../../constants/modules'
import { loadable } from '../../utils/router'

const CallsRoute = {
    path: module.path,
    component: loadable(() => import(module.PAGE))
}

export default CallsRoute