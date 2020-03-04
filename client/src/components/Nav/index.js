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
// import { isUserAuthenticated } from '../../utils/Auth' // Path may be wrong..


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,

    },
    toolbarRoot: {
        justifyContent: 'space-between',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    icon: {
        width: '24px',
        height: '24px',
    }
}));

const Nav = () => {
    const classes = useStyles();

    return (
        42 // This will be a condition to see if user is authenticated --> user.isAuthenticated
            ? <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={ classes.appBar }>
                    <Toolbar classes={{root: classes.toolbarRoot}}>
                        <BrandLogo />
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <Divider />
                        <ListItem button key='Home'>
                            <ListItemIcon> <img className={classes.icon} src='/images/pngIcons/049-island.png' /> </ListItemIcon>
                            <Typography>Home</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button key='MyTrove'>
                            <ListItemIcon> <img className={classes.icon} src='/images/pngIcons/046-treasureChest.png' /> </ListItemIcon>
                            <Typography>My Trove</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button key='Discover'>
                            <ListItemIcon> <img className={classes.icon} src='/images/pngIcons/029-pirate.png' /> </ListItemIcon>
                            <Typography>Friends</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button key='Discover'>
                            <ListItemIcon> <img className={classes.icon} src='/images/pngIcons/001-compass.png' /> </ListItemIcon>
                            <Typography>Discover</Typography>
                        </ListItem>
                    </List>
                    <Divider />

                </Drawer>
            </div>
            : null
    );
}

export default Nav;