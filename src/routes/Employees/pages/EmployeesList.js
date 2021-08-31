// import { useState, useEffect } from 'react'

import {
    IconButton,
    Card,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core'
import {
    Edit as EditIcon

} from '@material-ui/icons'

const employeesQuery = [
    {
        id: 1,
        firstName: 'Fernando',
        lastName: '',
        jobTitle: 'Gte. Comercial',
        email: 'fernando@gmail.com',
        workPhone: '2652',
        homePhone: '',
        mobilePhone: '',
        country: 'Rep. Dom.',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        notes: ''
    },
    {
        id: 2,
        firstName: 'Tomas',
        lastName: '',
        jobTitle: 'Dir. Comercial',
        email: 'tomas@gmail.com',
        workPhone: '2829',
        homePhone: '',
        mobilePhone: '',
        country: 'EE. UU.',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        notes: ''
    },
]

// const employeesList = Object.assign([],employeesQuery)
// const allColumns = Object.keys(employeesQuery[0])

const EmployeesList = ({ allFields }) => {

        // const resultColumns = allFields.map((item) => item.field)

        // const notDisplayColumns = allColumns.filter(x => !resultColumns.includes(x))
        // notDisplayColumns.map((column) => {
        //     for (let i = 0; i < employeesList.length; i++) {
        //         delete employeesList[i][column]
        //     }
        // })

    return (
        <Card>
            <Table>
                <TableHead>
                    <TableRow>
                        {allFields.map((field) => (
                            <TableCell key={field.field}> {field.label} </TableCell>
                        ))}
                        <TableCell> Action </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeesQuery.map((row) => {
                        const columns = Object.keys(row)
                        columns.push('action')
                        return (
                            <TableRow key={row.id}>
                                {columns.map((colum) => {
                                    if (colum !== 'action') {
                                        return <TableCell key={colum}> {row[colum]} </TableCell>
                                    } else {
                                        return <TableCell key="action"><IconButton onClick={(e) => console.log(row)}><EditIcon /></IconButton></TableCell>
                                    }
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Card>

    )
}

export default EmployeesList