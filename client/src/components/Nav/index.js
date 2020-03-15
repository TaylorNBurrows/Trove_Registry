import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import BrandLogo from '../BrandLogo/index';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,

    },
    toolbarRoot: {
        justifyContent: 'space-between',
    },
}));

const Nav = (props) => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar classes={{ root: classes.toolbarRoot }}>
                    <BrandLogo />
                    <Link to="/logout"><Button color="inherit" >Logout</Button></Link>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default Nav;