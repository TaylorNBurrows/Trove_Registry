import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


import animatedLogo from '../images/Logos/LogoAnimation.gif'
import donutGIF from '../images/Donut-Chest.gif'


const LandingPage = () => {
    return (
        <div>
            <img src={animatedLogo} alt="Trove Logo" width="350px" />
            <br></br>
            <Link to="/signup"><Button>Sign Up</Button></Link>
            <Link to="/login"><Button>Login</Button></Link>
        </div>
    )
}

export default LandingPage