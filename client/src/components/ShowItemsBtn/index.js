import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OpenWithRoundedIcon from '@material-ui/icons/OpenWithRounded';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const ShowItemsBtn = (props) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.root}
            color='primary'
            onClick={props.onClick}
            size='medium'
            id={props.id}>

            <OpenWithRoundedIcon color='primary' fontSize='large' />
        </IconButton>

    );
}

export default ShowItemsBtn

