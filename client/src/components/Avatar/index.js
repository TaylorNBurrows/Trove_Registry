import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import { spacing } from '@material-ui/system';
import SearchBar from '../SearchBar'
import TextField from '@material-ui/core/TextField'

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
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    teal: {
        color: 'white',
        backgroundColor: theme.palette.secondary.dark,
    },
    spacing: {
        marginTop: "-150px",
        marginLeft: "55px"
    },
}));

export default function AvatarImage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt={props.user.username} src="/static/images/avatar/1.jpg" className={clsx(classes.large, classes.teal, classes.spacing)} />
        </div>
    );
}