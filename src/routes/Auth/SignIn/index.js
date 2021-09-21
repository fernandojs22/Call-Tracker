import { SIGNIN as mod2 } from '../../../constants/paths'
import SignInPage from '../../Auth/SignIn/pages/SignIn'
import enhance from '../enhance'

const SignInRoute = {
    path: mod2.PATH,
    component:  enhance(SignInPage)
    // component: loadable(() => import(mod2.PAGE))
}

export default SignInRoute