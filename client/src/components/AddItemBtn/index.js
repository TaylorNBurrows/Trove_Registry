import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const AddItemBtn = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab
            size="small"
                color="primary"
                className={classes.button}
                onClick={props.onClick}
            ><AddCircleIcon /></Fab>
        </div>
    );
}

export default AddItemBtn

