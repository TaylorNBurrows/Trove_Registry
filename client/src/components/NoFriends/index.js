import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NoFriendsImg from "../../images/Logos/NoFriends.png";
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    image: {
        width: '950px',
        height: '700px'
    },
}));

const NoFriends = () => {
    const classes = useStyles();
    return(
        <img className={classes.image} src={NoFriendsImg} alt="Trove"/>
    )
 
}

export default NoFriends;