import { CUSTOMERS as mod2 } from '../../constants/paths'
import CustomersPage from '../Customers/pages/Customers'
import enhance from './enhance'

const CustomersRoute = {
    path: mod2.PATH,
    component:  enhance(CustomersPage)
}

export default CustomersRoute