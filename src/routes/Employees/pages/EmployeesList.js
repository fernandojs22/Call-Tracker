import { useState, useEffect } from 'react'

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
    TablePagination
} from '@material-ui/core'
import {
    Edit as EditIcon,
    Search as SearchIcon

} from '@material-ui/icons'

import { employeesData } from '../models/employeesData'

const EmployeesList = ({ classes, listFields }) => {

    const [employeesResult, setEmployeesResult] = useState(employeesData)

    useEffect(() => {

        const allColumns = Object.keys(employeesData[0])
        const displayColumns = listFields.map((item) => item.field)
        const notDisplayColumns = allColumns.filter(x => !displayColumns.includes(x))
        const newEmployeesResult = [...employeesData]

        notDisplayColumns.map((column) => {
            for (let i = 0; i < newEmployeesResult.length; i++) {
                delete newEmployeesResult[i][column]
            }
            return newEmployeesResult
        })

        setEmployeesResult(newEmployeesResult)
    }, [listFields])

    return (
        <Container>
            <Box className={classes.boxEnd} >
                <Button
                    variant="contained"
                    color="primary"
                >
                    Create Employee
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
                                <TableRow key={row.id}>
                                    {columns.map((colum) => {
                                        if (colum === 'id') {
                                            return <Checkbox key={colum} />
                                        } else if (colum === 'firstName') {
                                            return <TableCell key={colum}> <Avatar src={row['avatar']} /><Typography>{row[colum]}</Typography></TableCell>
                                        } else if (colum !== 'action' && colum !== 'avatar') {
                                            return <TableCell key={colum}> <Typography>{row[colum]}</Typography> </TableCell>
                                        } else if (colum === 'action') {
                                            return <TableCell key="action"><IconButton onClick={(e) => console.log(employeesData.filter((emp) => emp.id === row.id))}><EditIcon /></IconButton></TableCell>
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
                <TablePagination
                    component="div"
                    count={employeesResult.length}
                    // onPageChange={handlePageChange}
                    // onRowsPerPageChange={handleLimitChange}
                    // page={1}
                    // rowsPerPage={1}
                    // rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>

        </Container>
    )
}

export default EmployeesList