import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import theme from '../../utils/themeUtil'
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    teal: {
        color: 'white',
        backgroundColor: theme.palette.secondary.light,
        height: '250px',
        borderRadius: '10px',
        padding: '10px',
    },
}));

const ProfileBanner = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.teal} />
    )
}

export default ProfileBanner