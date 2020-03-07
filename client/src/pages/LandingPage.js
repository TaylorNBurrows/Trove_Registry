import React from 'react';
import { Link } from 'react-router-dom'
import Main from '../components/Main'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import animatedLogo from '../images/Logos/TroveLogo.png'
// import donutGIF from '../images/Donut-Chest.gif'


const LandingPage = () => {
    return (
        <Main>
            <Grid item alignContent="center">
                <div style={{ textAlign: 'center' }}
                // style={{ backgroundImage: `url(${donutGIF})`, backgroundSize: 'cover', backgroundPosition: "center", height: "100vh" }}
                >
                    <img src={animatedLogo} alt="Trove Logo" width="350px" />
                    <br></br>
                    <Link to="/signup"><Button>Sign Up</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                </div>
            </Grid>
        </Main>

    )
}

export default LandingPage;