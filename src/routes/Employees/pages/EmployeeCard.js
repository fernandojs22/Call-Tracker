// import { useEffect } from 'react'

import {
    Container,
    Button,
    Grid,
    Divider
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon
} from '@material-ui/icons'

import { sessions } from '../models/employeesSessions'
import Sessions from '../../../components/SessionsCards/SessionCard'

const EmployeeCard = ({classes}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Sessions classes={classes} sessions={sessions} />
                <Divider />
                <Grid container>
                    <Grid item lg={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            className={classes.submitBtn}
                            endIcon={<KeyboardArrowRightIcon />}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default EmployeeCard