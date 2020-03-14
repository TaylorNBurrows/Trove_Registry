import React, { useState, useEffect, Fragment } from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import NewFriendsDialogModal from '../components/NewFriendsDialogModal'
import FriendTable from '../components/FriendTable'
import API from '../utils/API'
import Auth from '../utils/Auth'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    layout: {
        marginTop: '75px',
    },
})

const MyFriendsPage = () => {
    const classes = useStyles();
    const [search, setSearch] = useState();
    const [user, setUser] = useState();
    const [friends, setFriends] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [searchResult, setSearchResult] = useState();

    console.log(search)
    console.log(user)
    console.log(friends)

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        API.dashboard(Auth.getToken())
            .then(res => {
                setUser(res.data.user)
                API.getFriends(res.data.user._id, Auth.getToken()).then(friend => {
                    // setFriends(res.data.user.friends)
                    console.log(friend.data.friends)
                    setFriends(friend.data.friends)

                });
            })
    }, [])


    return (
        <Fragment>
            <Grid container spacing={0} direction="row">
                <Grid item md={12}>
                    <Nav />
                </Grid>
            </Grid>
            <Grid container spacing={0} direction="row">
                <Grid item md={2} sm={2}>
                    <SideBar />
                </Grid>
                <Grid item md={10} sm={10} className={classes.layout}>
                    <FriendTable friends={friends} setFriends={setFriends} user={user} searchResult={searchResult} setSearchResult={setSearchResult}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default MyFriendsPage