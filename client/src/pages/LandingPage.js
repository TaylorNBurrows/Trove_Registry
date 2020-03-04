import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import animatedLogo from '../images/Logos/LogoAnimation.gif'
import donutGIF from '../images/Donut-Chest.gif'
import { makeStyles } from '@material-ui/core';

import { ImageBackground } from 'react-native';


const LandingPage = () => {
    return (
        <ImageBackground style={styles.imgBackground}
            resizeMode='cover'
            source={donutGIF}>
            <div>
                <img src={animatedLogo} alt="Trove Logo" width="350px" />
                <br></br>
                <Link to="/signup"><Button>Sign Up</Button></Link>
                <Link to="/login"><Button>Login</Button></Link>
            </div>

        </ImageBackground>

    )
}

export default LandingPage