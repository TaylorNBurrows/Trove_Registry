import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../utils/themeUtil'
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    teal: {
        color: 'white',
        backgroundColor: theme.palette.secondary.light,
        height: '250px',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '50px',
        marginLeft: '250px',
    },
}));

const ProfileBanner = () => {
    const classes = useStyles();
    return (
        <div className={classes.teal}> </div>
    )
}

export default ProfileBanner