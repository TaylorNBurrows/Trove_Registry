import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
}));

const Main = ({ children }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {children}
        </main>
    )
}

export default Main;