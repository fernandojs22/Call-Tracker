import { SIGNUP as module } from '../../constants/modules'
import { loadable } from '../../utils/router'

const SignUpRoute = {
    path: module.path,
    component: loadable(() => import(module.PAGE))
}

export default SignUpRoute