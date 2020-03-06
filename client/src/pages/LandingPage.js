import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import animatedLogo from '../images/Logos/TroveLogo.png'
// import donutGIF from '../images/Donut-Chest.gif'


const LandingPage = () => {
    return (
        <div>
            <Grid container>
                <img src={animatedLogo} alt="Trove Logo" width="350px" />
            </Grid>
            <Grid container>
                <br></br>
                <Link to="/signup"><Button>Sign Up</Button></Link>
                <Link to="/login"><Button>Login</Button></Link>
            </Grid>
        </div>
    )
}

export default LandingPage;