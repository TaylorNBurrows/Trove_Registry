import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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

const AddTroveBtn = () => {
    const classes = useStyles();

    return (
            <IconButton color="primary" aria-label="add">
                <AddIcon />
            </IconButton>
    );
}

export default AddTroveBtn

