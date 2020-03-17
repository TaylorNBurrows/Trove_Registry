import React from 'react';
import { Link } from 'react-router-dom'
import Main from '../components/Main'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import animatedLogo from '../images/Logos/TroveLogo.png'
import donutGIF from '../images/Donut-Chest.gif'

const useStyles = makeStyles(theme => ({
    centerGraphics: {
        alignContent: "center",
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    background: {
        backgroundImage: `url(${donutGIF})`,
        height: '100vh'
    },
    container: {
        backgroundColor: 'white',
        opacity: '90%',
        width: '50vh',
        padding: '30px',
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }

}));

const LandingPage = (props) => {
    const classes = useStyles();
    console.log(props)
    return (

        <Main >
            <Paper className={classes.background}>
                <div className={classes.centerGraphics}>
                    <Grid container spacing={3}>
                        <Grid item xs={2} direction='row'>
                        </Grid>
                        <Grid item xs={8} direction='row'>
                            <Container className={classes.container}>
                                <img src={animatedLogo} alt="Trove Logo" width="350px" />
                                <br></br>
                                <br></br>
                                <Button variant='contained' color='primary' href="/signup">Sign Up</Button>
                                <Button variant='contained' color='primary' href="/login">Login</Button>
                                <br></br>
                                <br></br>
                            </Container>


                        </Grid>
                        <Grid item xs={2} direction='row'></Grid>
                    </Grid>
                </div>



            </Paper>

        </Main >

    )
}

export default LandingPage;