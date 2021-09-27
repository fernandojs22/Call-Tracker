import { EMPLOYEES as mod2 } from '../../constants/paths'
import EmployeesPage from './pages/Employees'
import enhance from './enhance'

const EmployeesRoute = {
    path: mod2.PATH,
    component: enhance(EmployeesPage)
}

export default EmployeesRoute