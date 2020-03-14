import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

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
}));

const ProfileBanner = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid className={classes.teal} />
        </Fragment>
    )
}

export default ProfileBanner