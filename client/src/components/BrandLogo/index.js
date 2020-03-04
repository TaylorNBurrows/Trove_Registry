import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    logo: {
        width: '100px',
        height: '50px'
    },
}));

const BrandLogo = () => {
    const classes = useStyles()
    
    return(
        <img className={ classes.logo } src="/images/Logos/TroveLogo.png"/>
    )
 
}

export default BrandLogo;