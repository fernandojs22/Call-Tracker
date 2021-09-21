import { CALLS as mod2 } from '../../constants/paths'
import CallsPage from '../Calls/pages/Calls'
import enhance from './enhance'

const CallsRoute = {
    path: mod2.PATH,
    component:  enhance(CallsPage)
}

export default CallsRoute