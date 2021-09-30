import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
    IconButton,
    Card,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container,
    Box,
    Button,
    Checkbox,
    SvgIcon,
    TextField,
    InputAdornment,
    Avatar,
    Typography,
    // TablePagination
} from '@material-ui/core'
import {
    Edit as EditIcon,
    Search as SearchIcon

} from '@material-ui/icons'


import { useDispatch } from 'react-redux'
import { getEmployee } from '../../../redux/employees/actions'

import EmployeeCard from './EmployeeCard'

import IntlMessages from '../../../components/Utils/IntlMessages'

const EmployeesList = ({ classes, listFields }) => {

    const dispatch = useDispatch()

    const { employees, employees2 } = useSelector(state => state.Employees)

    const [employeesResult, setEmployeesResult] = useState(employees)
    const [employee, setEmployee] = useState({})
    

    const [listFlag, setListFlag] = useState(true)

    useEffect(() => {

        const allColumns = Object.keys(employees[0] || [])
        const displayColumns = listFields.map((item) => item.field)
        const notDisplayColumns = allColumns.filter(x => !displayColumns.includes(x))
        
        const newEmployeesResult = employees.map(e => Object.assign({},e))

        notDisplayColumns.map((column) => {
            for (let i = 0; i < newEmployeesResult.length; i++) {
                delete newEmployeesResult[i][column]
            }
            return newEmployeesResult
        })

        setEmployeesResult(newEmployeesResult)
    }, [listFields,employees])

    const employeesList = () => {
        return (
            <Container>
            <Box className={classes.boxEnd} >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => employeeCard({})}
                >
                    <IntlMessages id="employees.create-employee" />
                </Button>
            </Box>
            <Card className={classes.card}>
                <TextField
                    // fullWidth
                    className={classes.searchText}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SvgIcon
                                    fontSize="small"
                                    color="action"
                                >
                                    <SearchIcon />
                                </SvgIcon>
                            </InputAdornment>
                        )
                    }}
                    placeholder="Search customer"
                    variant="outlined"
                />
            </Card>
            <Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            {listFields.map((field) => {
                                if (field.field !== 'avatar') {
                                    return (
                                        <TableCell key={field.field}> {field.label} </TableCell>
                                    )
                                } else {
                                    return <></>
                                }
                            })}
                            <TableCell> Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeesResult.map((row) => {
                            const columns = Object.keys(row)
                            columns.push('action')
                            return (
                                <TableRow key={row._id}>
                                    {columns.map((colum) => {
                                        if (colum === 'id') {
                                            return <Checkbox key={colum} />
                                        } else if (colum === 'firstName') {
                                            return <TableCell key={colum}> <Avatar src={row['avatar']} /><Typography>{row[colum]}</Typography></TableCell>
                                        } else if (colum !== 'action' && colum !== 'avatar') {
                                            return <TableCell key={colum}> <Typography>{row[colum]}</Typography> </TableCell>
                                        } else if (colum === 'action') {
                                            return <TableCell key="action"><IconButton onClick={() => employeeCard2(employees2.filter((emp) => emp._id === row._id))}><EditIcon /></IconButton></TableCell>
                                        } else {
                                            return <></>
                                        }
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Card>
            <Card>
                {/* <TablePagination
                    component="div"
                    count={employeesResult.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={1}
                    rowsPerPage={1}
                    rowsPerPageOptions={[5, 10, 25]}
                /> */}
            </Card>

        </Container>
        )
    }

    const employeeCard = (emp) => {
        setListFlag(false)
        // dispatch(setEmployee())
    }

    const employeeCard2 = (emp) => {
        setEmployee(emp[0])
        setListFlag(false)
        dispatch(getEmployee(emp[0]))
    }

    return (
        <Box sx={{m:0}}>{listFlag ? employeesList() : (<EmployeeCard classes={classes} employee={employee}/>)}</Box>
    )
}

export default EmployeesList