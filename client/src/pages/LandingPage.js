import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import animatedLogo from '../images/Logos/LogoAnimation.gif'

const LandingPage = () => {
    return (

        <div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <img src={animatedLogo} alt="Trove Logo" width="350px" />
                    <br></br>
                    <Link to="/signup"><Button>Sign Up</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                </div>
            </div>
        </div >



    )
}

export default LandingPage