import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import banner from '../../images/Banners/Banner1.png'

const useStyles = makeStyles(theme => ({
    teal: {
        color: 'white',
        marginTop: '90px',
        marginRight: '15px',
        backgroundColor: theme.palette.secondary.light,
        height: '250px',
        borderRadius: '10px',
        padding: '10px',

    },
    bannerImg: {
        height: "250px",
        width: "auto",
        borderRadius: "10px",
        padding: "15px",
        backgroundRepeat: "repeat-x"
    }
}));

const ProfileBanner = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid className={classes.teal} >
                <img src={banner} className={classes.bannerImg} />
            </Grid>
        </Fragment>
    )
}

export default ProfileBanner