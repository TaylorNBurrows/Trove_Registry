import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: '250px',
        marginTop: '80px',

    },
}));

const Main = ({ children }) => {
    const classes = useStyles();
    
    return(
    <main className={classes.content}>
    { children }
</main> 
    )}

    export default Main;