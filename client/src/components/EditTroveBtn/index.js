import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
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
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={props.onClick}
                id = {props.id}
            >
                Edit
      </Button>
        </div>
    );
}

export default EditProfileBtn

