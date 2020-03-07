import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import BrandLogo from '../BrandLogo/index';

const drawerWidth = 200;


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
    console.log(props)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar classes={{ root: classes.toolbarRoot }}>
                    <BrandLogo />
                    <Link to="/logout"><Button color="inherit" >Logout</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;