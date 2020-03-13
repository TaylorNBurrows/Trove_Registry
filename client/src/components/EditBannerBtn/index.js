import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    spacing: {
        marginTop: "-150px",
        marginLeft: "900px"
    },
    
}));

const EditProfileBtn = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="Primary"
                className={clsx(classes.button, classes.spacing)}
                startIcon={<EditIcon />}
            >
                Customize My Trove
      </Button>
        </div>
    );
}

export default EditProfileBtn

