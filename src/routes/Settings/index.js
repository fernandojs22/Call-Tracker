import { SETTINGS as mod2 } from '../../constants/paths'
import SettingsPage from '../Settings/pages/Settings'
import enhance from './enhance'

const SettingsRoute = {
    path: mod2.PATH,
    component:  enhance(SettingsPage)
}

export default SettingsRoute