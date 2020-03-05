import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../images/Logos/TroveLogo.png";

const useStyles = makeStyles(theme => ({
    logo: {
        width: '100px',
        height: '50px'
    },
}));

const BrandLogo = () => {
    const classes = useStyles()
    
    return(
        <img className={ classes.logo } src={logo} alt="Trove"/>
    )
 
}

export default BrandLogo;