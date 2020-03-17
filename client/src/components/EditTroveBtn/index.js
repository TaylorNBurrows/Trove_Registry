import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

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

const EditTroveBtn = (props) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.root}
            color='primary'
            onClick={props.onClick}
            size='medium'
            id={props.id}>
            <EditIcon color='primary' fontSize='large'/>
        </IconButton>
    );
}

export default EditTroveBtn

