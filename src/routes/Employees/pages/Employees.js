import {
    Container,
    Button,
    Grid,
    ButtonGroup,
    Divider
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon
} from '@material-ui/icons'

import { useStyles } from '../../../assets/stytes/globalStyle'

import { sessions } from '../components/sessionsAndFields'
import Sessions from '../../../components/SessionsCards/SessionCard'

const Employees = () => {

    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Sessions classes={classes} sessions={sessions} />
                <Divider  className={classes.submitBtn}/>
                <Grid container>
                    <Grid item lg={12} className={classes.submitBtn}>
                        <ButtonGroup>
                            <Button
                                variant="contained"
                                type="submit"
                                endIcon={<KeyboardArrowRightIcon />}
                            >
                                Submit
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Employees