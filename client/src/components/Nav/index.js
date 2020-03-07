import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BrandLogo from '../BrandLogo/index';
import LogoutFunction from '../../pages/LogoutFunction';

import island from '../../images/pngIcons/049-island.png'
import treasureChest from '../../images/pngIcons/046-treasureChest.png'
import pirate from '../../images/pngIcons/029-pirate.png'
import compass from '../../images/pngIcons/001-compass.png'

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar classes={{ root: classes.toolbarRoot }}>
                    <BrandLogo />
                    <Button color="inherit" onClick={props.LogoutFunction}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;