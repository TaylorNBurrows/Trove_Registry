import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import island from '../../images/pngIcons/049-island.png'
import treasureChest from '../../images/pngIcons/046-treasureChest.png'
import pirate from '../../images/pngIcons/029-pirate.png'
import compass from '../../images/pngIcons/001-compass.png'

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
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

const SideBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.toolbar} />
                <List>
                    {/* <ListItem button key='Home'>
                        <ListItemIcon> <img className={classes.icon} src={island} alt="home" /> </ListItemIcon>
                        <Link to="/profile"><Typography>Home</Typography></Link>
                    </ListItem>
                    <Divider /> */}
                    <ListItem button key='MyTrove'>
                        <ListItemIcon> <img className={classes.icon} src={treasureChest} alt="Trove" /> </ListItemIcon>
                        <Link to="/profile"><Typography>My Trove</Typography></Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key='Friends'>
                        <ListItemIcon> <img className={classes.icon} src={pirate} alt='Friends' /> </ListItemIcon>
                        <Link to="/myfriends"><Typography>My Friends</Typography></Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key='Discover'>
                        <ListItemIcon> <img className={classes.icon} src={compass} alt='Discover' /> </ListItemIcon>
                        <Link to="/discover"><Typography>Discover</Typography></Link>
                    </ListItem>
                </List>
                <Divider />

            </Drawer>
        </div>
    );
}

export default SideBar;