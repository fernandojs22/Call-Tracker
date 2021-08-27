// import { loadable } from '../../../utils/router'
import { SIGNIN as mod2 } from '../../../constants/paths'
import SignInPage from '../../Auth/SignIn/pages/SignIn'

const SignInRoute = {
    path: mod2.PATH,
    component: SignInPage
    // component: loadable(() => import(mod2.PAGE))
}

export default SignInRoute