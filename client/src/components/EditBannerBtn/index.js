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
        marginTop: "-50%",
        marginLeft: "80%",
    }
}));

const EditBannerBtn = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="Primary"
                className={clsx(classes.button, classes.spacing)}
                startIcon={<EditIcon />}
            >
                Customize
      </Button>
        </div>
    );
}

export default EditBannerBtn;

