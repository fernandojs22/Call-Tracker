import { PROFILE as mod2 } from '../../constants/paths'
import ProfilePage from './pages/Profile'
import enhance from './enhance'

const ProfileRoute = {
    path: mod2.PATH,
    component:  enhance(ProfilePage)
}

export default ProfileRoute