import { SIGNIN as module } from '../../constants/modules'
import { loadable } from '../../utils/router'

const SignInRoute = {
    path: module.path,
    component: loadable(() => import(module.PAGE))
}

export default SignInRoute