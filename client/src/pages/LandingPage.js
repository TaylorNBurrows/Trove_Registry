import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import animatedLogo from '../img/LogoAnimation.gif'
// import donutGIF from '../../public/images/Donut-Chest.gif'


const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center' }}
        // style={{ backgroundImage: `url(${donutGIF})`, backgroundSize: 'cover', backgroundPosition: "center", height: "100vh" }}
        >
            <img src={animatedLogo} alt="Trove Logo" width="350px" />
            <br></br>
            <Link to="/signup"><Button>Sign Up</Button></Link>
            <Link to="/login"><Button>Login</Button></Link>
        </div>
    )
}

export default LandingPage;