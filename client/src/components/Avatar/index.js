import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import theme from '../../utils/themeUtil'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    teal: {
        color: 'white',
        backgroundColor: theme.palette.secondary.dark
    }
}));

export default function AvatarImage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Jiliene Circelli" src="/static/images/avatar/1.jpg" className={classes.large, classes.teal} />
        </div>
    );
}