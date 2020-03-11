import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Edit';

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

const SaveProfileBtn = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="Primary"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
      </Button>
        </div>
    );
}

export default SaveProfileBtn

