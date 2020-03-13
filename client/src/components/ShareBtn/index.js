import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';

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

const ShareBtn = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="secondary" aria-label="edit">
                <ShareIcon />
            </Fab>
        </div>
    );
}

export default ShareBtn

