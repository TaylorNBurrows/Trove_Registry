import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete';

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

const DeleteBtn = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab
                size='small'
                color="primary"
                className={classes.button}
                onClick={props.onClick}
                id={props.id}
            >
                <DeleteIcon />
            </Fab>
        </div>
    );
}

export default DeleteBtn

