import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit';

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

const EditProfileBtn = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab
                color="primary"
                className={classes.button}
                onClick={props.onClick}
                size='small'
                id = {props.id}
            >
                <EditIcon />
      </Fab>
        </div>
    );
}

export default EditProfileBtn

