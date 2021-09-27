import { FORGOT as mod2 } from '../../../constants/paths'
import ForgotPasswordPage from './pages/ForgotPassword'
import enhance from '../enhance'

const ForgotPasswordRoute = {
    path: mod2.PATH,
    component:  enhance(ForgotPasswordPage)
}

export default ForgotPasswordRoute