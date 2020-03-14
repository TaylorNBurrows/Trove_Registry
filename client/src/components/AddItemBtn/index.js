import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
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
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddCircleIcon />}
                onClick={props.onClick}
            >
                Add Items
      </Button>
        </div>
    );
}

export default AddItemBtn

